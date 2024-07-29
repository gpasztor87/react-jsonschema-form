import additionalProperties from "./additionalProperties";
import arrays from "./arrays";
import customArray from "./customArray";
import customObject from "./customObject";
import defaults from "./defaults";
import errors from "./errors";
import ifThenElse from "./ifThenElse";
import nested from "./nested";
import nullable from "./nullable";
import numbers from "./numbers";
import ordering from "./ordering";
import propertyDependencies from "./propertyDependencies";
import references from "./references";
import schemaDependencies from "./schemaDependencies";
import simple from "./simple";
import single from "./single";

export const samples = Object.freeze({
  Simple: simple,
  Nested: nested,
  Arrays: arrays,
  Numbers: numbers,
  Ordering: ordering,
  References: references,
  Single: single,
  Errors: errors,
  "Custom Object": customObject,
  "Custom Array": customArray,
  "Additional Properties": additionalProperties,
  "Property dependencies": propertyDependencies,
  "Schema dependencies": schemaDependencies,
  "If Then Else": ifThenElse,
  Nullable: nullable,
  Defaults: defaults,
} as const);

export type Sample = keyof typeof samples;
