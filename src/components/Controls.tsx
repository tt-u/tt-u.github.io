import React from "react";
import { useSite, THEMES, ThemeKey } from "../context/site";

const Controls: React.FC = () => {
  const { lang, setLang, theme, setTheme, t } = useSite();

  return (
    <div className="flex flex-col gap-4 pt-10 font-mono text-[10px] tracking-[0.3em] uppercase">
      <div className="flex items-center gap-3">
        <span className="h-px w-6 bg-blue-white/20" />
        <span className="text-blue-white/40">{t("lang_label")}</span>
        <div className="flex items-center gap-1 ml-auto">
          {(["en", "zh"] as const).map((code) => {
            const active = lang === code;
            return (
              <button
                key={code}
                onClick={() => setLang(code)}
                aria-pressed={active}
                className={`px-2 py-[3px] rounded-md border transition-colors duration-200 ${
                  active
                    ? "border-bright-blue/40 text-bright-blue bg-bright-blue/[0.08]"
                    : "border-white/[0.08] text-blue-white/45 hover:text-blue-white/80 hover:border-white/[0.18]"
                }`}
              >
                {code === "en" ? "EN" : "中"}
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex items-center gap-3">
        <span className="h-px w-6 bg-blue-white/20" />
        <span className="text-blue-white/40">{t("theme_label")}</span>
        <div className="flex items-center gap-[7px] ml-auto">
          {(Object.keys(THEMES) as ThemeKey[]).map((key) => {
            const active = theme === key;
            return (
              <button
                key={key}
                aria-label={THEMES[key].label}
                aria-pressed={active}
                onClick={() => setTheme(key)}
                className={`relative w-[14px] h-[14px] rounded-full transition-transform duration-200 ${
                  active ? "scale-110" : "hover:scale-110"
                }`}
                style={{ background: `rgb(${THEMES[key].rgb})` }}
              >
                <span
                  className={`absolute inset-[-3px] rounded-full border transition-opacity duration-200 ${
                    active
                      ? "border-white/60 opacity-100"
                      : "border-white/0 opacity-0"
                  }`}
                />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Controls;
