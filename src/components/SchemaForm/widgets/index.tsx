import type { RegistryWidgetsType } from "@rjsf/utils";

import { CheckboxWidget } from "./CheckboxWidget";
import { CheckboxesWidget } from "./CheckboxesWidget";
import { SelectWidget } from "./SelectWidget";
import { TextWidget } from "./TextWidget";
import { TextareaWidget } from "./TextareaWidget";

const widgets: RegistryWidgetsType = {
  CheckboxesWidget,
  CheckboxWidget,
  SelectWidget,
  TextareaWidget,
  TextWidget,
};

export default widgets;
