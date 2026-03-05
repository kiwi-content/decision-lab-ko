import type { CSSProperties, DetailedHTMLProps, HTMLAttributes } from "react";

type DotLottieWCAttributes = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
  src?: string;
  autoplay?: boolean;
  loop?: boolean;
  speed?: number;
  mode?: string;
  style?: CSSProperties;
};

declare module "react/jsx-runtime" {
  namespace JSX {
    interface IntrinsicElements {
      "dotlottie-wc": DotLottieWCAttributes;
    }
  }
}
