import * as React from "react";
import HoverTitle from "../components/HoverTitle";
import { useSite } from "../context/site";

const Pill: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="inline-flex items-center px-2 py-[2px] mx-[1px] rounded-md border border-bright-blue/30 bg-bright-blue/[0.06] text-bright-blue font-mono text-[13px] tracking-wide">
    {children}
  </span>
);

const Marker: React.FC<{ label: string; accent?: boolean }> = ({
  label,
  accent,
}) => (
  <div className="flex items-center gap-3 mb-3">
    <span
      className={`h-px w-6 ${
        accent ? "bg-bright-blue/70" : "bg-blue-white/20"
      }`}
    />
    <span
      className={`font-mono text-[10px] tracking-[0.4em] uppercase ${
        accent ? "text-bright-blue" : "text-blue-white/45"
      }`}
    >
      {label}
    </span>
    <span
      className={`h-px flex-1 ${
        accent ? "bg-bright-blue/30" : "bg-blue-white/10"
      }`}
    />
  </div>
);

const About: React.FC = () => {
  const { t, lang } = useSite();

  return (
    <section
      id="about"
      className="text-blue-white/80 tracking-wide leading-relaxed"
    >
      <HoverTitle sectionId="about" title={t("about_label")} index="01" />

      <h1 className="font-mono font-medium text-blue-white text-2xl sm:text-[28px] leading-tight mb-10">
        {t("hi")}
        <span className="inline-block w-[10px] h-[22px] sm:h-[26px] align-[-4px] ml-2 bg-bright-blue/90 animate-pulse" />
      </h1>

      <div className="space-y-8">
        <div>
          <Marker label={t("then")} />
          <p className="text-[15px] sm:text-base text-blue-white/65">
            {t("bio_then")}
          </p>
        </div>

        <div>
          <Marker label={t("now")} accent />
          <p className="text-[15px] sm:text-base text-blue-white/90">
            {lang === "en" ? (
              <>
                AI&rsquo;s sidekick — writing AI-first code and tuning my own{" "}
                <Pill>Claude Code</Pill>, <Pill>Codex</Pill>, and{" "}
                <Pill>Hermes</Pill> into collaborators that ship.
              </>
            ) : (
              <>全面拥抱 AI。</>
            )}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
