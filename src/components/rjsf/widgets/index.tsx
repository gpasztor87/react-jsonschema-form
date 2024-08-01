import {
  type FormContextType,
  type RJSFSchema,
  type RegistryWidgetsType,
  type StrictRJSFSchema,
} from "@rjsf/utils";

import { AltDateTimeWidget } from "./AltDateTimeWidget";
import { AltDateWidget } from "./AltDateWidget";
import { CheckboxWidget } from "./CheckboxWidget";
import { CheckboxesWidget } from "./CheckboxesWidget";
import { DateWidget } from "./DateWidget";
import { PasswordWidget } from "./PasswordWidget";
import { RadioWidget } from "./RadioWidget";
import { RangeWidget } from "./RangeWidget";
import { SelectWidget } from "./SelectWidget";
import { TextWidget } from "./TextWidget";
import { TextareaWidget } from "./TextareaWidget";
import { TimeWidget } from "./TimeWidget";
import { UpDownWidget } from "./UpDownWidget";

function generateWidgets<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
>(): RegistryWidgetsType<T, S, F> {
  return {
    AltDateTimeWidget,
    AltDateWidget,
    CheckboxesWidget,
    CheckboxWidget,
    DateWidget,
    PasswordWidget,
    RadioWidget,
    RangeWidget,
    SelectWidget,
    TextareaWidget,
    TextWidget,
    TimeWidget,
    UpDownWidget,
  };
}

export default generateWidgets();
