import additionalProperties from "./additionalProperties";
import customArray from "./customArray";
import customObject from "./customObject";
import errors from "./errors";
import ifThenElse from "./ifThenElse";
import nested from "./nested";
import nullable from "./nullable";
import propertyDependencies from "./propertyDependencies";
import schemaDependencies from "./schemaDependencies";
import simple from "./simple";
import single from "./single";

export const samples = Object.freeze({
  Simple: simple,
  Nested: nested,
  Single: single,
  Errors: errors,
  "Custom Object": customObject,
  "Custom Array": customArray,
  "Additional Properties": additionalProperties,
  "Property dependencies": propertyDependencies,
  "Schema dependencies": schemaDependencies,
  "If Then Else": ifThenElse,
  Nullable: nullable,
} as const);

export type Sample = keyof typeof samples;
