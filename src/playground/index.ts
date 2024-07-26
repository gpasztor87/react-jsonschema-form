import nullable from "./nullable";
import simple from "./simple";
import single from "./single";

export const samples = Object.freeze({
  Simple: simple,
  Single: single,
  Nullable: nullable,
} as const);

export type Sample = keyof typeof samples;
