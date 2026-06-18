"use client";

import { SITE_CONFIG } from "@/content/site";
import { useState, useEffect, type CSSProperties } from "react";
import dynamic from "next/dynamic";
import type { StoryMetadata, Story } from "@/lib/content";
import type { FilterState } from "@/types/emotion";
import { isWebGLSupported } from "@/lib/webgl";
import { HomeBackWaveButton } from "./HomeBackWaveButton";
import SentenceNavigation from "./SentenceNavigation";
import FallbackView from "./FallbackView";
import { Story2DView } from "./Story2DView";
import { useRouter } from "next/navigation";
import { ARCHIVE_CONSTELLATION_THEME } from "@/lib/archive-constellation-theme";

const ArchiveConstellationView = dynamic(
  () =>
    import("./ArchiveConstellationView").then((mod) => ({
      default: mod.ArchiveConstellationView,
    })),
  {
    ssr: false,
    loading: () => (
      <div
        className="w-full h-screen flex items-center justify-center"
        style={{ background: "var(--background)", color: "var(--foreground)" }}
      >
        <div className="text-center">
          <div className="text-2xl mb-4">Loading {SITE_CONFIG.siteName}...</div>
          <div className="animate-pulse" style={{ color: "var(--page-muted)" }}>
            Preparing 3D space
          </div>
        </div>
      </div>
    ),
  },
);

interface StorySpaceClientProps {
  stories: StoryMetadata[];
  fullStories: Story[];
  allEmotions: string[];
  allTextures: string[];
  allTemporality: string[];
  allGeography: string[];
  initialView?: "sentence" | "3d" | "2d-list";
}

type StorySpaceView = "sentence" | "3d" | "2d-list" | "fallback";

const lightArchiveThemeVars: CSSProperties = {
  "--background": ARCHIVE_CONSTELLATION_THEME.canvasBackground,
  "--foreground": "#000000",
  "--page-surface": "#ffffff",
  "--page-border": ARCHIVE_CONSTELLATION_THEME.buttonBorder,
  "--page-muted": "rgba(0, 0, 0, 0.62)",
  "--page-accent": "#bb3a2d",
  "--back-arrow-default": "#000000",
} as CSSProperties;

export function StorySpaceClient({
  stories,
  fullStories,
  allEmotions,
  allTextures,
  allTemporality,
  allGeography,
  initialView = "sentence",
}: StorySpaceClientProps) {
  const [view, setView] = useState<StorySpaceView>(initialView);
  const [webglError, setWebglError] = useState(false);
  const router = useRouter();

  // Lifted state for sharing between 3D and 2D views
  const [selectedThread, setSelectedThread] = useState<string | null>(null);
  const [filterState, setFilterState] = useState<FilterState>({
    emotions: [],
    textures: [],
    temporality: [],
    geography: [],
    intensity: 0.7,
  });

  // Check WebGL support
  useEffect(() => {
    if (view === "3d" && !isWebGLSupported()) {
      console.error("WebGL not supported, falling back to list view");
      setWebglError(true);
      setView("fallback");
    }
  }, [view]);

  useEffect(() => {
    if (initialView === "2d-list") {
      setView("2d-list");
      return;
    }

    const params = new URLSearchParams(window.location.search);
    const requestedView = params.get("view");
    if (
      requestedView === "sentence" ||
      requestedView === "3d" ||
      requestedView === "2d-list"
    ) {
      setView(requestedView);
    }
  }, [initialView]);

  const handleEnter3DSpace = (filter?: Partial<FilterState>) => {
    // Initialize filter state from sentence navigation
    if (filter) {
      setFilterState({
        emotions: filter.emotions || [],
        textures: filter.textures || [],
        temporality: filter.temporality || [],
        geography: filter.geography || [],
        intensity: filter.intensity || 0.7,
      });
    }
    setView("3d");
  };

  const handleStoryClick = (slug: string) => {
    const returnView = view === "fallback" ? initialView : view;
    router.push(`/stories/${slug}?from=${encodeURIComponent(returnView)}`);
  };

  useEffect(() => {
    fullStories.forEach((story) => {
      router.prefetch(`/stories/${story.metadata.slug}`);
    });
  }, [fullStories, router]);

  if (view === "sentence") {
    return (
      <>
        <HomeBackWaveButton />
        <SentenceNavigation
          stories={fullStories}
          onEnter3DSpace={handleEnter3DSpace}
        />
      </>
    );
  }

  if (view === "fallback" || webglError) {
    return (
      <>
        <HomeBackWaveButton />
        <FallbackView
          stories={stories}
          onStoryClick={handleStoryClick}
          onBackTo3D={() => setView("3d")}
        />
      </>
    );
  }

  if (view === "2d-list") {
    return (
      <div style={lightArchiveThemeVars}>
        <HomeBackWaveButton />
        <Story2DView stories={fullStories} onStoryClick={handleStoryClick} />
      </div>
    );
  }

  return (
    <>
      <HomeBackWaveButton />
      <ArchiveConstellationView
        stories={stories}
        onStoryOpen={handleStoryClick}
        filterState={filterState}
        onFilterChange={setFilterState}
        selectedThread={selectedThread}
        onThreadSelect={setSelectedThread}
        onViewToggle={() => setView("2d-list")}
        allEmotions={allEmotions}
        allTextures={allTextures}
        allTemporality={allTemporality}
        allGeography={allGeography}
      />
    </>
  );
}
