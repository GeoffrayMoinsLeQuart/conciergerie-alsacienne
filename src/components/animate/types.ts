// ../types.ts
import type { Easing, BezierDefinition } from 'framer-motion';

// Accepté par Framer Motion: un easing nommé, un tuple bezier [x1,y1,x2,y2],
// ou un tableau d'easings pour keyframes.
export type EaseType = Easing | BezierDefinition | Easing[];

export type VariantsType = {
  distance?: number;
  durationIn?: number;
  durationOut?: number;
  easeIn?: EaseType;
  easeOut?: EaseType;
};

export type TranHoverType = {
  duration?: number;
  ease?: EaseType;
};

export type TranEnterType = {
  durationIn?: number;
  easeIn?: EaseType;
};

export type TranExitType = {
  durationOut?: number;
  easeOut?: EaseType;
};

export type BackgroundType = {
  colors?: string[];
  duration?: number;
  ease?: EaseType;
};