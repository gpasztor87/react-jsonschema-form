import {
  type FormContextType,
  type RJSFSchema,
  type StrictRJSFSchema,
  type TemplatesType,
} from "@rjsf/utils";

import { AddButton } from "./AddButton";
import {
  CopyButton,
  MoveDownButton,
  MoveUpButton,
  RemoveButton,
} from "./IconButton";
import { SubmitButton } from "./SubmitButton";

export function ButtonTemplates<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
>(): TemplatesType<T, S, F>["ButtonTemplates"] {
  return {
    AddButton,
    CopyButton,
    MoveDownButton,
    MoveUpButton,
    RemoveButton,
    SubmitButton,
  };
}
