import {
  type FormContextType,
  type RJSFSchema,
  type StrictRJSFSchema,
  type TemplatesType,
} from "@rjsf/utils";

import {
  AddButton,
  CopyButton,
  MoveDownButton,
  MoveUpButton,
  RemoveButton,
  SubmitButton,
} from "./ButtonTemplates";
import { DescriptionFieldTemplate } from "./DescriptionFieldTemplate";
import { FieldErrorTemplate } from "./FieldErrorTemplate";
import { FieldHelpTemplate } from "./FieldHelpTemplate";
import { FieldTemplate } from "./FieldTemplate";
import { ObjectFieldTemplate } from "./ObjectFieldTemplate";
import { TitleFieldTemplate } from "./TitleFieldTemplate";
import { UnsupportedFieldTemplate } from "./UnsupportedFieldTemplate";

export function generateTemplates<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
>(): Partial<TemplatesType<T, S, F>> {
  return {
    ButtonTemplates: {
      AddButton,
      CopyButton,
      MoveDownButton,
      MoveUpButton,
      RemoveButton,
      SubmitButton,
    },
    DescriptionFieldTemplate,
    FieldErrorTemplate,
    FieldHelpTemplate,
    FieldTemplate,
    ObjectFieldTemplate,
    TitleFieldTemplate,
    UnsupportedFieldTemplate,
  };
}

export default generateTemplates();
