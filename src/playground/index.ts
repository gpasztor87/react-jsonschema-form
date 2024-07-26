import customArray from "./customArray";
import nullable from "./nullable";
import schemaDependencies from "./schemaDependencies";
import simple from "./simple";
import single from "./single";

export const samples = Object.freeze({
  Simple: simple,
  Single: single,
  "Custom Array": customArray,
  "Schema dependencies": schemaDependencies,
  Nullable: nullable,
} as const);

export type Sample = keyof typeof samples;
