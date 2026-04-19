import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { generateAvatarFor } from "@bitmappunks/avatar-generator";

const DEFAULT_SEED = "tt-u-avatar";
const FALLBACK_SEED_PREFIX = "t";

function getSeed(search: string): string {
  const params = new URLSearchParams(search);
  const seed = params.get("t")?.trim();

  if (seed) {
    return seed;
  }

  return `${FALLBACK_SEED_PREFIX}-${Date.now()}`;
}

const pageStyle: React.CSSProperties = {
  margin: 0,
  minHeight: "100vh",
  display: "grid",
  placeItems: "center",
  background: "transparent",
};

const imageStyle: React.CSSProperties = {
  display: "block",
  width: "min(100vw, 960px)",
  height: "auto",
  imageRendering: "pixelated",
};

const fallbackTextStyle: React.CSSProperties = {
  fontFamily: "system-ui, sans-serif",
  fontSize: "14px",
  color: "#666",
};

const AvatarPage: React.FC<PageProps> = () => {
  const [seed, setSeed] = React.useState(DEFAULT_SEED);
  const [avatarSrc, setAvatarSrc] = React.useState<string | null>(null);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const nextSeed = getSeed(window.location.search);

    setSeed(nextSeed);

    let cancelled = false;

    generateAvatarFor(nextSeed)
      .then((avatar) => {
        if (cancelled) {
          return;
        }

        setAvatarSrc(avatar.svgBase64);
        setError(null);
      })
      .catch((generationError) => {
        if (cancelled) {
          return;
        }

        console.error("Failed to generate avatar", generationError);
        setAvatarSrc(null);
        setError("Avatar generation failed.");
      });

    return () => {
      cancelled = true;
    };
  }, []);

  if (error) {
    return (
      <main style={pageStyle}>
        <p style={fallbackTextStyle}>{error}</p>
      </main>
    );
  }

  return (
    <main style={pageStyle}>
      {avatarSrc ? (
        <img
          src={avatarSrc}
          alt={`Generated avatar for seed ${seed}`}
          style={imageStyle}
        />
      ) : (
        <p style={fallbackTextStyle}>Generating avatar…</p>
      )}
    </main>
  );
};

export default AvatarPage;

export const Head: HeadFC = () => (
  <>
    <title>Avatar | TTU</title>
    <meta name="robots" content="noindex" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>{`html, body, #___gatsby, #gatsby-focus-wrapper { margin: 0; min-height: 100%; background: transparent; }`}</style>
  </>
);
