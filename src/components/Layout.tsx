import * as React from "react";
import Tab from "./Tab";
import WaveName from "./WaveName";
import Controls from "./Controls";
import media from "../assets/favicon.png";
import { SiteProvider, useSite } from "../context/site";

const LayoutInner: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { t } = useSite();
  const [activeTab, setActiveTab] = React.useState<string>("about");

  React.useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const rgb =
        getComputedStyle(document.documentElement)
          .getPropertyValue("--accent-rgb")
          .trim() || "56 189 248";
      const x = e.clientX;
      const y = e.clientY;
      const gradient = `radial-gradient(520px at ${x}px ${y}px, rgb(${rgb} / 0.10), transparent 60%)`;
      const el = document.querySelector(".gradient-spot") as HTMLElement | null;
      if (el) el.style.background = gradient;
    };
    document.addEventListener("mousemove", onMove);
    return () => document.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div className="bg-blue-black mx-auto min-h-screen max-w-screen-xl px-8 lg:px-12 relative">
      <div className="grid-overlay" aria-hidden="true" />
      <div className="gradient-spot" aria-hidden="true" />

      <div className="lg:flex lg:justify-between lg:h-screen lg:gap-8 relative">
        <div className="lg:w-2/5 lg:py-24 pt-12 lg:pl-4 lg:sticky lg:top-0">
          <main>
            <div className="flex flex-col pb-4 relative min-w-[300px]">
              <div className="flex items-center gap-2 mb-5 font-mono text-[10px] tracking-[0.3em] uppercase text-blue-white/50">
                <span className="relative inline-flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-bright-blue opacity-60 animate-ping" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-bright-blue" />
                </span>
                <span>{t("status")}</span>
              </div>

              <div className="mr-5 min-w-[80px] max-w-[108px] sm:min-w-[105px] sm:max-w-[150px] mb-5">
                <img
                  src={media}
                  alt="avatar"
                  className="rounded-full border border-white/[0.08]"
                />
              </div>

              <WaveName />

              <h2 className="text-blue-white/90 text-lg mt-1 font-mono tracking-wide">
                {t("subtitle")}
              </h2>
              <p className="text-blue-white/50 text-[13px] mt-2 font-mono tracking-wide max-w-[340px]">
                {t("tagline")}
              </p>
            </div>

            <nav className="pt-10 hidden lg:block">
              <ul className="flex flex-col space-y-4">
                <Tab
                  to="#about"
                  text={t("nav_about")}
                  isActive={activeTab === "about"}
                  setActiveTab={setActiveTab}
                />
                <Tab
                  to="#projects"
                  text={t("nav_projects")}
                  isActive={activeTab === "projects"}
                  setActiveTab={setActiveTab}
                />
              </ul>
            </nav>

            <div className="hidden lg:block">
              <Controls />
            </div>
          </main>
        </div>

        <div className="overflow-auto lg:w-1/2">
          {children}
          <section className="mb-8 mt-10 pt-6 border-t border-white/[0.06] text-blue-white/50 text-[12px] font-mono tracking-wide">
            <span>© {new Date().getFullYear()} TTU</span>
          </section>
          <div className="lg:hidden pb-10">
            <Controls />
          </div>
        </div>
      </div>
    </div>
  );
};

const Layout: React.FC<{
  pageTitle: string;
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <SiteProvider>
      <LayoutInner>{children}</LayoutInner>
    </SiteProvider>
  );
};

export default Layout;
