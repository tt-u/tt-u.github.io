import React, { useState } from "react";

interface ProjectCardProps {
  imageSrc?: string;
  title: string;
  description: string;
  link: string;
  techStack?: string[];
  index?: string;
}

const hostOf = (url: string) => {
  try {
    return new URL(url).host.replace(/^www\./, "");
  } catch {
    return url;
  }
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  imageSrc,
  title,
  description,
  link,
  techStack,
  index,
}) => {
  const [hovered, setHovered] = useState(false);
  const host = hostOf(link);

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="no-underline block group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <article
        className={`relative mb-6 rounded-xl border overflow-hidden transition-all duration-300 ${
          hovered
            ? "border-bright-blue/25 bg-bright-blue/[0.03]"
            : "border-white/[0.06] bg-transparent"
        }`}
      >
        {imageSrc ? (
          <div className="aspect-[16/9] overflow-hidden bg-white/[0.02] border-b border-white/[0.06]">
            <img
              src={imageSrc}
              alt={title}
              className={`w-full h-full object-cover object-top transition-transform duration-700 ease-out ${
                hovered ? "scale-[1.03]" : ""
              }`}
            />
          </div>
        ) : (
          <div
            className="aspect-[16/9] flex items-center justify-center font-mono text-bright-blue/80 text-lg tracking-[0.4em] border-b border-white/[0.06]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 30% 20%, rgba(var(--accent-rgb), 0.12), transparent 60%), rgba(255,255,255,0.02)",
            }}
          >
            {title.slice(0, 2).toUpperCase()}
          </div>
        )}

        <div className="p-5">
          <header className="flex items-baseline gap-2 mb-1 flex-wrap">
            {index && (
              <span className="font-mono text-[10px] tracking-[0.3em] text-bright-blue/80">
                {index}
              </span>
            )}
            <h3 className="font-mono font-medium text-blue-white text-[17px] tracking-wide">
              <span className="relative inline-block">
                {title}
                <span
                  className={`absolute left-0 -bottom-[2px] h-px bg-bright-blue transition-all duration-500 ease-out ${
                    hovered ? "w-full" : "w-0"
                  }`}
                />
              </span>
              <span
                className={`ml-2 inline-block transition-transform duration-300 ${
                  hovered
                    ? "translate-x-1 -translate-y-[2px] text-bright-blue"
                    : "text-blue-white/70"
                }`}
              >
                ↗
              </span>
            </h3>
          </header>

          <div className="font-mono text-[11px] tracking-[0.12em] text-blue-white/40 mb-3">
            {host}
          </div>

          <p className="text-[14.5px] leading-relaxed font-mono text-blue-white/75">
            {description}
          </p>

          {techStack && techStack.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-1.5">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-[2px] rounded-md border border-bright-blue/25 bg-bright-blue/[0.06] text-bright-blue text-[11px] font-mono tracking-wide"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </article>
    </a>
  );
};

export default ProjectCard;
