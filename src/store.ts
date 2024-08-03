import { samples } from "@/playground";
import { RJSFSchema, UiSchema } from "@rjsf/utils";
import { create } from "zustand";

type Sample = {
  schema: RJSFSchema;
  uiSchema: object;
  formData: object;
};

export type AppState = {
  schema: any;
  uiSchema: any;
  formData: any;
  label: string;
  setLabel: (label: string) => void;
  setSchema: (value: string) => void;
  setUiSchema: (value: string) => void;
  setFormData: (value: string) => void;
};

export const useStore = create<AppState>((set) => ({
  schema: samples.Simple.schema as RJSFSchema,
  uiSchema: samples.Simple.uiSchema,
  formData: samples.Simple.formData,
  label: "Simple",
  setSchema: (value: string) => {
    set({ schema: value });
  },
  setUiSchema: (value: string) => {
    set({ uiSchema: value });
  },
  setFormData: (value: string) => {
    set({ formData: value });
  },
  setLabel: (label: string) => {
    // @ts-expect-error resolve later
    const sample: Sample = samples[label];
    set({
      label,
      schema: sample.schema as RJSFSchema,
      uiSchema: sample.uiSchema as UiSchema,
      formData: sample.formData,
    });
  },
}));
