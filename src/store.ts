import { samples } from "@/playground";
import { RJSFSchema } from "@rjsf/utils";
import { create } from "zustand";

type Sample = {
  schema: RJSFSchema;
  uiSchema: object;
  formData: object;
};

export type AppState = {
  schema: RJSFSchema;
  uiSchema: object;
  formData: object;
  label: string;
  setLabel: (label: string) => void;
};

export const useStore = create<AppState>((set) => ({
  schema: samples.Simple.schema as RJSFSchema,
  uiSchema: samples.Simple.uiSchema,
  formData: samples.Simple.formData,
  label: "Simple",
  setLabel: (label: string) => {
    // @ts-expect-error resolve later
    const sample: Sample = samples[label];
    set({
      label,
      schema: sample.schema as RJSFSchema,
      uiSchema: sample.uiSchema as object,
      formData: sample.formData as object,
    });
  },
}));
