import { useCallback } from "react";

import {
  type FormContextType,
  type RJSFSchema,
  type StrictRJSFSchema,
  type WidgetProps,
  getInputProps,
} from "@rjsf/utils";

import { Slider } from "@/components/ui/slider";

export function RangeWidget<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
>(props: WidgetProps<T, S, F>) {
  const { value, disabled, readonly, onChange, options, schema } = props;
  const inputProps = getInputProps<T, S, F>(schema, undefined, options);

  const handleChange = useCallback(
    (value: number[]) => onChange(value[0]),
    [onChange],
  );

  return (
    <div className="flex items-center gap-2">
      <Slider
        disabled={disabled || readonly}
        value={[value]}
        min={inputProps.min}
        max={inputProps.max}
        step={Number(inputProps.step)}
        onValueChange={handleChange}
      />
      <div className="">{value}</div>
    </div>
  );
}
