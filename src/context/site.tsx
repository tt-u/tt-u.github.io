import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useMemo,
} from "react";

export type Lang = "en" | "zh";

export const THEMES = {
  sky: { label: "sky", rgb: "56 189 248" },
  emerald: { label: "emerald", rgb: "52 211 153" },
  amber: { label: "amber", rgb: "251 191 36" },
  rose: { label: "rose", rgb: "244 114 182" },
  violet: { label: "violet", rgb: "167 139 250" },
  bone: { label: "bone", rgb: "226 232 240" },
} as const;

export type ThemeKey = keyof typeof THEMES;

const DICT = {
  en: {
    status: "online",
    subtitle: "AI's sidekick.",
    tagline:
      "Writing AI-first code — shipping with Claude Code, Codex, and Hermes.",
    nav_about: "about",
    nav_projects: "projects",
    footer_site: "blockinsight.top",
    footer_built: "built with claude code",
    about_label: "About",
    projects_label: "Projects",
    hi: "Hi, I'm TTU.",
    then: "Then",
    now: "Now",
    bio_then: "Frontend engineer, data analyst, and on-chain engineer.",
    card_title: "Card",
    card_desc:
      "Terminal-styled business card generator. Render JSON into cards with custom fields, themes, and backgrounds — export as high-res PNG.",
    word_title: "Word",
    word_desc:
      "Chinese calligraphy grid generator. Pinyin-annotated 田/米 grids with multiple fonts and palettes, exported as PNG.",
    lang_label: "Lang",
    theme_label: "Theme",
  },
  zh: {
    status: "在线",
    subtitle: "AI 的搭档。",
    tagline: "实现想法 —— 和 Claude Code、Codex、Hermes 一起。",
    nav_about: "关于",
    nav_projects: "项目",
    footer_site: "blockinsight.top",
    footer_built: "由 Claude Code 构建",
    about_label: "关于",
    projects_label: "项目",
    hi: "Hi, I'm TTU.",
    then: "从前",
    now: "现在",
    bio_then: "前端工程师、数据分析师、链上工程师。",
    card_title: "JSON 名片生成器",
    card_desc:
      "一个把 JSON 渲染成终端风格名片的小工具，可以自定义字段、主题、背景，导出高清 PNG。",
    word_title: "书法田字格生成器",
    word_desc:
      "一个中文书法田字格图片生成工具。输入中文内容后，可以自动生成带拼音标注的田字格 / 米字格图片，并支持多种字体、配色与导出 PNG。",
    lang_label: "语言",
    theme_label: "主题",
  },
} as const;

export type DictKey = keyof typeof DICT["en"];

interface SiteState {
  lang: Lang;
  setLang: (l: Lang) => void;
  theme: ThemeKey;
  setTheme: (t: ThemeKey) => void;
  t: (key: DictKey) => string;
}

const SiteContext = createContext<SiteState | null>(null);
const isBrowser = () => typeof window !== "undefined";

export const SiteProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [lang, setLangState] = useState<Lang>("zh");
  const [theme, setThemeState] = useState<ThemeKey>("sky");

  useEffect(() => {
    if (!isBrowser()) return;
    const savedLang = localStorage.getItem("site.lang") as Lang | null;
    const savedTheme = localStorage.getItem("site.theme") as ThemeKey | null;
    if (savedLang === "en" || savedLang === "zh") setLangState(savedLang);
    if (savedTheme && savedTheme in THEMES) setThemeState(savedTheme);
  }, []);

  useEffect(() => {
    if (!isBrowser()) return;
    document.documentElement.style.setProperty(
      "--accent-rgb",
      THEMES[theme].rgb
    );
  }, [theme]);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (isBrowser()) localStorage.setItem("site.lang", l);
  };

  const setTheme = (next: ThemeKey) => {
    setThemeState(next);
    if (isBrowser()) localStorage.setItem("site.theme", next);
  };

  const value = useMemo<SiteState>(
    () => ({
      lang,
      setLang,
      theme,
      setTheme,
      t: (key: DictKey) => DICT[lang][key],
    }),
    [lang, theme]
  );

  return (
    <SiteContext.Provider value={value}>{children}</SiteContext.Provider>
  );
};

export const useSite = () => {
  const ctx = useContext(SiteContext);
  if (!ctx) throw new Error("useSite must be used within SiteProvider");
  return ctx;
};
