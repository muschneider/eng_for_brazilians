import type { SVGProps } from "react";

/* Hand-rolled 24px stroke icons — zero runtime dependency. */

type P = SVGProps<SVGSVGElement>;

function Base({ children, ...props }: P & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export const IconHome = (p: P) => (
  <Base {...p}>
    <path d="M3 10.5 12 3l9 7.5" />
    <path d="M5 9.5V20a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1V9.5" />
  </Base>
);

export const IconBook = (p: P) => (
  <Base {...p}>
    <path d="M4 4.5A1.5 1.5 0 0 1 5.5 3H19a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H5.5A1.5 1.5 0 0 0 4 20.5z" />
    <path d="M4 17.5A1.5 1.5 0 0 1 5.5 16H20" />
    <path d="M8 7h8M8 10.5h5" />
  </Base>
);

export const IconTarget = (p: P) => (
  <Base {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <circle cx="12" cy="12" r="4.5" />
    <circle cx="12" cy="12" r="1" fill="currentColor" />
  </Base>
);

export const IconTable = (p: P) => (
  <Base {...p}>
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <path d="M3 9.5h18M3 15h18M9.5 9.5V20" />
  </Base>
);

export const IconChart = (p: P) => (
  <Base {...p}>
    <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
  </Base>
);

export const IconFlame = (p: P) => (
  <Base {...p}>
    <path d="M12 3s5.5 4.2 5.5 9a5.5 5.5 0 0 1-11 0c0-1.7.7-3 1.6-4 .2 1.2.9 2 1.9 2 1.4 0 2-1.2 2-3 0-1.6-.4-3-.4-3z" />
  </Base>
);

export const IconBolt = (p: P) => (
  <Base {...p}>
    <path d="M13 2 4.5 13.5H11L10 22l8.5-11.5H12z" />
  </Base>
);

export const IconCheck = (p: P) => (
  <Base {...p}>
    <path d="m4.5 12.5 5 5 10-11" />
  </Base>
);

export const IconX = (p: P) => (
  <Base {...p}>
    <path d="m6 6 12 12M18 6 6 18" />
  </Base>
);

export const IconArrowRight = (p: P) => (
  <Base {...p}>
    <path d="M4 12h15M13 6l6 6-6 6" />
  </Base>
);

export const IconArrowLeft = (p: P) => (
  <Base {...p}>
    <path d="M20 12H5M11 6l-6 6 6 6" />
  </Base>
);

export const IconSearch = (p: P) => (
  <Base {...p}>
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.5-3.5" />
  </Base>
);

export const IconSun = (p: P) => (
  <Base {...p}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M19.1 4.9l-1.8 1.8M6.7 17.3l-1.8 1.8" />
  </Base>
);

export const IconMoon = (p: P) => (
  <Base {...p}>
    <path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5z" />
  </Base>
);

export const IconLightbulb = (p: P) => (
  <Base {...p}>
    <path d="M9.5 18h5M10 21h4" />
    <path d="M12 3a6 6 0 0 0-3.5 10.9c.6.4 1 1.1 1 1.8V16h5v-.3c0-.7.4-1.4 1-1.8A6 6 0 0 0 12 3z" />
  </Base>
);

export const IconAlert = (p: P) => (
  <Base {...p}>
    <path d="M12 3.5 22 20H2z" />
    <path d="M12 10v4.5M12 17.5v.01" />
  </Base>
);

export const IconKey = (p: P) => (
  <Base {...p}>
    <circle cx="8" cy="15" r="4" />
    <path d="m11 12 9-9M17 6l2.5 2.5M14.5 8.5 17 11" />
  </Base>
);

export const IconRepeat = (p: P) => (
  <Base {...p}>
    <path d="M3 11V9a4 4 0 0 1 4-4h12M17 2l3 3-3 3" />
    <path d="M21 13v2a4 4 0 0 1-4 4H5M7 22l-3-3 3-3" />
  </Base>
);

export const IconTrophy = (p: P) => (
  <Base {...p}>
    <path d="M7 4h10v5a5 5 0 0 1-10 0z" />
    <path d="M7 5.5H4.5A2.5 2.5 0 0 0 7 10M17 5.5h2.5A2.5 2.5 0 0 1 17 10" />
    <path d="M12 14v3.5M8.5 21h7l-.7-3.5h-5.6z" />
  </Base>
);

export const IconSparkle = (p: P) => (
  <Base {...p}>
    <path d="M12 3.5 13.8 9l5.7 1.8-5.7 1.8L12 18.5 10.2 12.6 4.5 10.8 10.2 9z" />
    <path d="M18.5 3v3M20 4.5h-3" />
  </Base>
);

export const IconChevronDown = (p: P) => (
  <Base {...p}>
    <path d="m6 9.5 6 6 6-6" />
  </Base>
);

export const IconMenu = (p: P) => (
  <Base {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </Base>
);

export const IconLayers = (p: P) => (
  <Base {...p}>
    <path d="m12 3 9 5-9 5-9-5z" />
    <path d="m3 13 9 5 9-5M3 17.5l9 5 9-5" />
  </Base>
);

export const IconMic = (p: P) => (
  <Base {...p}>
    <rect x="9" y="2.5" width="6" height="11" rx="3" />
    <path d="M5.5 11.5a6.5 6.5 0 0 0 13 0M12 18v3.5M9 21.5h6" />
  </Base>
);

export const IconBriefcase = (p: P) => (
  <Base {...p}>
    <rect x="2.5" y="7" width="19" height="13" rx="2" />
    <path d="M8.5 7V5a1.5 1.5 0 0 1 1.5-1.5h4A1.5 1.5 0 0 1 15.5 5v2M2.5 12.5h19" />
  </Base>
);

export const IconCompass = (p: P) => (
  <Base {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="m15.5 8.5-2 5-5 2 2-5z" />
  </Base>
);

export const IconGrid = (p: P) => (
  <Base {...p}>
    <rect x="3" y="3" width="7.5" height="7.5" rx="1.5" />
    <rect x="13.5" y="3" width="7.5" height="7.5" rx="1.5" />
    <rect x="3" y="13.5" width="7.5" height="7.5" rx="1.5" />
    <rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1.5" />
  </Base>
);

export const IconDownload = (p: P) => (
  <Base {...p}>
    <path d="M12 3v12M7.5 10.5 12 15l4.5-4.5M4 20h16" />
  </Base>
);

export const IconUpload = (p: P) => (
  <Base {...p}>
    <path d="M12 15V3M7.5 7.5 12 3l4.5 4.5M4 20h16" />
  </Base>
);

export const IconTrash = (p: P) => (
  <Base {...p}>
    <path d="M4 6.5h16M9 6.5V4.5A1 1 0 0 1 10 3.5h4a1 1 0 0 1 1 1v2" />
    <path d="M6.5 6.5 7.5 20a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1l1-13.5M10 10.5v6M14 10.5v6" />
  </Base>
);

export const IconClock = (p: P) => (
  <Base {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5.5l3.5 2" />
  </Base>
);

export const IconLock = (p: P) => (
  <Base {...p}>
    <rect x="4.5" y="10" width="15" height="11" rx="2" />
    <path d="M8 10V7a4 4 0 0 1 8 0v3" />
  </Base>
);

export const IconRotate = (p: P) => (
  <Base {...p}>
    <path d="M20 12a8 8 0 1 1-2.6-5.9" />
    <path d="M20 3.5V9h-5.5" />
  </Base>
);

export const IconEye = (p: P) => (
  <Base {...p}>
    <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z" />
    <circle cx="12" cy="12" r="3" />
  </Base>
);

export const MODULE_ICONS = {
  foundation: IconCompass,
  verbs: IconBolt,
  structure: IconLayers,
  words: IconBook,
  nuance: IconSparkle,
  fluency: IconMic,
  professional: IconBriefcase,
  reference: IconTable,
} as const;
