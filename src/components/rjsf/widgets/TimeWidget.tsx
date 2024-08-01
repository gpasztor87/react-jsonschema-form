import { useCallback } from "react";

import {
  type FormContextType,
  type RJSFSchema,
  type StrictRJSFSchema,
  type WidgetProps,
  getTemplate,
} from "@rjsf/utils";

export function TimeWidget<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
>(props: WidgetProps<T, S, F>) {
  const { onChange, options, registry } = props;
  const BaseInputTemplate = getTemplate<"BaseInputTemplate", T, S, F>(
    "BaseInputTemplate",
    registry,
    options,
  );
  const handleChange = useCallback(
    (value: any) => onChange(value ? `${value}:00` : undefined),
    [onChange],
  );

  return <BaseInputTemplate type="time" {...props} onChange={handleChange} />;
}
