import {
  type FormContextType,
  type RJSFSchema,
  type RegistryWidgetsType,
  type StrictRJSFSchema,
} from "@rjsf/utils";

import { CheckboxWidget } from "./CheckboxWidget";
import { CheckboxesWidget } from "./CheckboxesWidget";
import { PasswordWidget } from "./PasswordWidget";
import { RadioWidget } from "./RadioWidget";
import { SelectWidget } from "./SelectWidget";
import { TextWidget } from "./TextWidget";
import { TextareaWidget } from "./TextareaWidget";

function generateWidgets<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
>(): RegistryWidgetsType<T, S, F> {
  return {
    CheckboxesWidget,
    CheckboxWidget,
    PasswordWidget,
    RadioWidget,
    SelectWidget,
    TextareaWidget,
    TextWidget,
  };
}

export default generateWidgets();