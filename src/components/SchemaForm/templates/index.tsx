import {
  type FormContextType,
  type RJSFSchema,
  type StrictRJSFSchema,
  type TemplatesType,
} from "@rjsf/utils";

import { ArrayFieldItemTemplate } from "./ArrayFieldItemTemplate";
import { ArrayFieldTemplate } from "./ArrayFieldTemplate";
import { ButtonTemplates } from "./ButtonTemplates";
import { DescriptionFieldTemplate } from "./DescriptionFieldTemplate";
import { FieldErrorTemplate } from "./FieldErrorTemplate";
import { FieldHelpTemplate } from "./FieldHelpTemplate";
import { FieldTemplate } from "./FieldTemplate";
import { ObjectFieldTemplate } from "./ObjectFieldTemplate";
import { TitleFieldTemplate } from "./TitleFieldTemplate";
import { UnsupportedFieldTemplate } from "./UnsupportedFieldTemplate";
import { WrapIfAdditionalTemplate } from "./WrapIfAdditionalTemplate";

function generateTemplates<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
>(): Partial<TemplatesType<T, S, F>> {
  return {
    ArrayFieldItemTemplate,
    ArrayFieldTemplate,
    ButtonTemplates: ButtonTemplates(),
    DescriptionFieldTemplate,
    FieldErrorTemplate,
    FieldHelpTemplate,
    FieldTemplate,
    ObjectFieldTemplate,
    TitleFieldTemplate,
    UnsupportedFieldTemplate,
    WrapIfAdditionalTemplate,
  };
}

export default generateTemplates();
