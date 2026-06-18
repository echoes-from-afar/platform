import type { HomeGraphContent } from "../lib/home-graph.ts";

/**
 * Example homepage constellation.
 *
 * This file is DATA, not logic: the multilingual copy, story links, 3D
 * positions, responsive layout classes, and static connection lines that make
 * up the homepage constellation. It ships with the open-source release so the
 * homepage renders a working demonstration; replace it with your archive's
 * own constellation. The translations here are example-quality only — have a
 * speaker review yours before publishing.
 *
 * Invariants (enforced by tests/home-graph-content.test.mjs):
 * - node ids are unique; every edge endpoint references an existing node
 * - every node has a layout entry and vice versa
 * - every node's copy covers all HOME_GRAPH_LANGUAGES
 * - every storySlug resolves to a file in content/stories/
 */
export const HOME_GRAPH_CONTENT: HomeGraphContent = {
  nodes: [
    {
      id: "example-slogan",
      copy: {
        en: "Every archive begins with one story",
        ja: "すべてのアーカイブは一つの物語から始まる",
        ko: "모든 아카이브는 하나의 이야기에서 시작된다",
        zh: "每一座档案馆都始于一个故事",
        th: "ทุกจดหมายเหตุเริ่มต้นจากเรื่องเล่าหนึ่งเรื่อง",
        hi: "हर संग्रह एक कहानी से शुरू होता है",
        vi: "Mọi kho lưu trữ đều bắt đầu từ một câu chuyện",
        id: "Setiap arsip bermula dari satu cerita",
        fa: "هر آرشیوی با یک داستان آغاز می شود",
      },
      tone: "phrase",
      position: [-6.1, 1.7, 1.5],
      animationDelayMs: 120,
    },
    {
      id: "lighthouse-title",
      copy: {
        en: "The Paper Lighthouse",
        ja: "紙の灯台",
        ko: "종이 등대",
        zh: "纸灯塔",
        th: "ประภาคารกระดาษ",
        hi: "कागज़ का प्रकाशस्तंभ",
        vi: "Ngọn hải đăng bằng giấy",
        id: "Mercusuar Kertas",
        fa: "فانوس دریایی کاغذی",
      },
      storySlug: "the-paper-lighthouse",
      tone: "title",
      position: [-3.6, -0.2, -0.4],
      animationDelayMs: 240,
    },
    {
      id: "lighthouse-phrase",
      copy: {
        en: "Letters folded into light",
        ja: "光に折りたたまれた手紙",
        ko: "빛으로 접힌 편지들",
        zh: "折成光的信",
        th: "จดหมายที่พับเป็นแสง",
        hi: "रोशनी में मुड़े हुए ख़त",
        vi: "Những lá thư gấp thành ánh sáng",
        id: "Surat-surat yang dilipat menjadi cahaya",
        fa: "نامه هایی که به نور تا شده اند",
      },
      storySlug: "the-paper-lighthouse",
      tone: "phrase",
      position: [-1.6, -3.1, 1.7],
      animationDelayMs: 360,
    },
    {
      id: "lighthouse-whisper",
      copy: {
        en: "A lighthouse built from a correspondence across the water",
        ja: "海を越えた文通から建てられた灯台",
        ko: "바다를 건넌 서신으로 지어진 등대",
        zh: "由跨越海洋的通信建成的灯塔",
        th: "ประภาคารที่สร้างจากจดหมายโต้ตอบข้ามน้ำ",
        hi: "पानी के पार पत्राचार से बना एक प्रकाशस्तंभ",
        vi: "Một ngọn hải đăng dựng từ những lá thư vượt biển",
        id: "Mercusuar yang dibangun dari surat-menyurat melintasi lautan",
        fa: "فانوسی ساخته شده از نامه نگاری در آن سوی آب",
      },
      storySlug: "the-paper-lighthouse",
      tone: "whisper",
      position: [-4.7, 4.1, -1.8],
      animationDelayMs: 0,
    },
    {
      id: "train-title",
      copy: {
        en: "Static on the Night Train",
        ja: "夜行列車のノイズ",
        ko: "야간열차의 잡음",
        zh: "夜车上的电波杂音",
        th: "สัญญาณรบกวนบนรถไฟกลางคืน",
        hi: "रात की रेलगाड़ी की सरसराहट",
        vi: "Tiếng nhiễu trên chuyến tàu đêm",
        id: "Derau di Kereta Malam",
        fa: "پارازیت در قطار شبانه",
      },
      storySlug: "static-on-the-night-train",
      tone: "title",
      position: [4.9, 2.8, -2.2],
      animationDelayMs: 180,
    },
    {
      id: "train-phrase",
      copy: {
        en: "A radio between two languages",
        ja: "二つの言語のあいだのラジオ",
        ko: "두 언어 사이의 라디오",
        zh: "两种语言之间的收音机",
        th: "วิทยุระหว่างสองภาษา",
        hi: "दो भाषाओं के बीच एक रेडियो",
        vi: "Một chiếc radio giữa hai ngôn ngữ",
        id: "Radio di antara dua bahasa",
        fa: "رادیویی میان دو زبان",
      },
      storySlug: "static-on-the-night-train",
      tone: "phrase",
      position: [2.4, 0.8, 0.6],
      animationDelayMs: 300,
    },
    {
      id: "train-whisper",
      copy: {
        en: "Recordings from the seam where two countries are audible at once",
        ja: "二つの国が同時に聞こえる継ぎ目からの録音",
        ko: "두 나라가 동시에 들리는 이음새에서의 녹음",
        zh: "来自两个国家同时可闻之接缝的录音",
        th: "บันทึกเสียงจากตะเข็บที่ได้ยินสองประเทศพร้อมกัน",
        hi: "उस सीवन से रिकॉर्डिंग जहाँ दो देश एक साथ सुनाई देते हैं",
        vi: "Những bản ghi từ đường nối nơi hai đất nước cùng vang lên",
        id: "Rekaman dari jahitan tempat dua negara terdengar sekaligus",
        fa: "ضبط هایی از درزی که دو کشور همزمان شنیده می شوند",
      },
      storySlug: "static-on-the-night-train",
      tone: "whisper",
      position: [6.3, -1.2, 2.3],
      animationDelayMs: 420,
    },
    {
      id: "sky-title",
      copy: {
        en: "Recipe for a Borrowed Sky",
        ja: "借りものの空のレシピ",
        ko: "빌려온 하늘의 레시피",
        zh: "借来天空的食谱",
        th: "สูตรอาหารแห่งท้องฟ้าที่ยืมมา",
        hi: "उधार के आसमान की विधि",
        vi: "Công thức cho một bầu trời mượn",
        id: "Resep untuk Langit Pinjaman",
        fa: "دستور پختی برای آسمانی قرضی",
      },
      storySlug: "recipe-for-a-borrowed-sky",
      tone: "title",
      position: [-7.2, -2.2, -2.8],
      animationDelayMs: 260,
    },
    {
      id: "sky-phrase",
      copy: {
        en: "Cooking the weather of elsewhere",
        ja: "よその天気を料理する",
        ko: "다른 곳의 날씨를 요리하다",
        zh: "烹煮他乡的天气",
        th: "ปรุงสภาพอากาศของที่อื่น",
        hi: "कहीं और के मौसम को पकाना",
        vi: "Nấu thời tiết của một nơi xa",
        id: "Memasak cuaca dari tempat lain",
        fa: "پختن آب و هوای جایی دیگر",
      },
      storySlug: "recipe-for-a-borrowed-sky",
      tone: "phrase",
      position: [-3.4, -5.0, -0.1],
      animationDelayMs: 480,
    },
    {
      id: "sky-whisper",
      copy: {
        en: "A communal meal that recreates a faraway monsoon, one dish at a time",
        ja: "遠いモンスーンを一皿ずつ再現する共同の食事",
        ko: "머나먼 몬순을 한 접시씩 재현하는 공동의 식사",
        zh: "一道菜一道菜重现遥远季风的共享餐桌",
        th: "มื้ออาหารร่วมกันที่จำลองมรสุมอันไกลโพ้นทีละจาน",
        hi: "एक साझा भोजन जो दूर के मानसून को एक-एक व्यंजन से फिर रचता है",
        vi: "Một bữa ăn chung tái hiện cơn gió mùa xa xôi, từng món một",
        id: "Hidangan bersama yang menghadirkan kembali musim hujan yang jauh, sepiring demi sepiring",
        fa: "غذایی جمعی که موسمی دوردست را بشقاب به بشقاب بازآفرینی می کند",
      },
      storySlug: "recipe-for-a-borrowed-sky",
      tone: "whisper",
      position: [5.7, -4.2, 1.2],
      animationDelayMs: 540,
    },
  ],
  edges: [
    {
      id: "edge-lighthouse-main",
      from: "lighthouse-title",
      to: "lighthouse-phrase",
    },
    {
      id: "edge-lighthouse-whisper",
      from: "lighthouse-whisper",
      to: "lighthouse-title",
      opacity: 0.26,
    },
    {
      id: "edge-slogan-lighthouse",
      from: "example-slogan",
      to: "lighthouse-title",
    },
    { id: "edge-train-main", from: "train-title", to: "train-phrase" },
    {
      id: "edge-train-whisper",
      from: "train-title",
      to: "train-whisper",
      opacity: 0.26,
    },
    {
      id: "edge-slogan-train",
      from: "example-slogan",
      to: "train-phrase",
      opacity: 0.28,
    },
    { id: "edge-sky-main", from: "sky-title", to: "sky-phrase" },
    {
      id: "edge-sky-whisper",
      from: "sky-phrase",
      to: "sky-whisper",
      opacity: 0.26,
    },
    {
      id: "edge-sky-slogan",
      from: "sky-title",
      to: "example-slogan",
      opacity: 0.25,
    },
    {
      id: "edge-lighthouse-sky",
      from: "lighthouse-phrase",
      to: "sky-phrase",
      opacity: 0.22,
    },
    {
      id: "edge-train-lighthouse",
      from: "train-phrase",
      to: "lighthouse-whisper",
      opacity: 0.2,
    },
  ],
  layouts: {
    "example-slogan": {
      desktopClassName:
        "left-[21.4%] top-[26.6%] max-w-[24.5rem] -translate-x-1/2 text-center",
      mobileClassName:
        "left-[19.3%] top-[27.7%] max-w-[11rem] -translate-x-1/2 text-left",
    },
    "lighthouse-title": {
      desktopClassName: "left-[30%] top-[46%] -translate-x-1/2 text-center",
      mobileClassName: "left-[60.9%] top-[46.5%] -translate-x-1/2 text-center",
    },
    "lighthouse-phrase": {
      desktopClassName:
        "left-[44.1%] top-[73%] max-w-[18rem] -translate-x-1/2 text-center",
      mobileClassName:
        "left-[46.4%] top-[80.8%] max-w-[13.5rem] -translate-x-1/2 text-center",
    },
    "lighthouse-whisper": {
      desktopClassName:
        "left-[33.3%] top-[11.4%] max-w-[26.5rem] -translate-x-1/2 text-center",
      mobileClassName:
        "left-[46.4%] top-[10.1%] max-w-[16.5rem] -translate-x-1/2 text-center",
    },
    "train-title": {
      desktopClassName:
        "left-[66.7%] top-[21.2%] max-w-[22rem] -translate-x-1/2 text-center",
      mobileClassName:
        "left-[69.2%] top-[16.3%] max-w-[11rem] -translate-x-1/2 text-center",
    },
    "train-phrase": {
      desktopClassName:
        "left-[54.9%] top-[37.4%] max-w-[19rem] -translate-x-1/2 text-center",
      mobileClassName:
        "left-[71.3%] top-[62.1%] max-w-[11rem] -translate-x-1/2 text-center",
    },
    "train-whisper": {
      desktopClassName:
        "left-[77.5%] top-[56.8%] max-w-[20rem] -translate-x-1/2 text-center",
      mobileClassName:
        "left-[70.3%] top-[37.1%] max-w-[11rem] -translate-x-1/2 text-right",
    },
    "sky-title": {
      desktopClassName:
        "left-[10.6%] top-[66.5%] max-w-[16.5rem] -translate-x-1/2 text-center",
      mobileClassName:
        "left-[19.3%] top-[56.9%] max-w-[10rem] -translate-x-1/2 text-left",
    },
    "sky-phrase": {
      desktopClassName:
        "left-[30%] top-[86%] max-w-[17rem] -translate-x-1/2 text-center",
      mobileClassName:
        "left-[50.5%] top-[92.2%] max-w-[14rem] -translate-x-1/2 text-center",
    },
    "sky-whisper": {
      desktopClassName:
        "left-[78.6%] top-[75.2%] max-w-[22rem] -translate-x-1/2 text-center",
      mobileClassName:
        "left-[46.4%] top-[70.4%] max-w-[17rem] -translate-x-1/2 text-center",
    },
  },
  staticLines: {
    desktop: [
      { id: "line-lighthouse-top", x1: 34.3, y1: 13.6, x2: 30, y2: 42.8 },
      { id: "line-slogan-lighthouse", x1: 22.5, y1: 28.7, x2: 30, y2: 42.8 },
      { id: "line-slogan-train", x1: 25.7, y1: 28.7, x2: 54.9, y2: 37.4 },
      { id: "line-lighthouse-down", x1: 31.1, y1: 48.2, x2: 43, y2: 69.8 },
      { id: "line-train-main", x1: 66.7, y1: 23.3, x2: 54.9, y2: 35.2 },
      { id: "line-train-whisper", x1: 66.7, y1: 23.3, x2: 76.5, y2: 53.6 },
      { id: "line-sky-main", x1: 11.7, y1: 67.6, x2: 28.9, y2: 82.7 },
      { id: "line-sky-whisper", x1: 31.1, y1: 86, x2: 75.4, y2: 75.2 },
      { id: "line-sky-slogan", x1: 11.7, y1: 65, x2: 21.4, y2: 29.8 },
      { id: "line-lighthouse-sky", x1: 44.1, y1: 75, x2: 31.1, y2: 84 },
    ],
    mobile: [
      { id: "m-line-train", x1: 46.4, y1: 11.1, x2: 69.2, y2: 18.4 },
      { id: "m-line-slogan", x1: 20.4, y1: 29.8, x2: 59.9, y2: 45.4 },
      { id: "m-line-lighthouse", x1: 60.9, y1: 47.5, x2: 47.4, y2: 78.7 },
      { id: "m-line-sky", x1: 19.3, y1: 58.9, x2: 48.4, y2: 79.7 },
      { id: "m-line-bridge", x1: 70.3, y1: 39.2, x2: 46.4, y2: 69.3 },
    ],
  },
};
