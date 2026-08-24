import type { SVGProps } from "react";

/* Small icon set used by callouts. Kept separate so `blocks.tsx` stays
   a pure server component with no barrel-import cycles. */

type P = SVGProps<SVGSVGElement>;

function Base({ children, ...props }: P & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.9}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

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

export const IconMic = (p: P) => (
  <Base {...p}>
    <rect x="9" y="2.5" width="6" height="11" rx="3" />
    <path d="M5.5 11.5a6.5 6.5 0 0 0 13 0M12 18v3.5M9 21.5h6" />
  </Base>
);

export const IconPen = (p: P) => (
  <Base {...p}>
    <path d="M15.5 4.5 19.5 8.5 8 20H4v-4z" />
    <path d="m13.5 6.5 4 4" />
  </Base>
);
