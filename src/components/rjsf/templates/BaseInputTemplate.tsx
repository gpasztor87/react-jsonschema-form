import { ChangeEvent, FocusEvent, useCallback } from "react";

import {
  type FormContextType,
  type RJSFSchema,
  type StrictRJSFSchema,
  type WidgetProps,
  getInputProps,
} from "@rjsf/utils";

import { Input } from "@/components/ui/input";

export function BaseInputTemplate<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
>(props: WidgetProps<T, S, F>) {
  const {
    id,
    name,
    value,
    onBlur,
    onChange,
    onFocus,
    autofocus,
    readonly,
    disabled,
    options,
    schema,
  } = props;
  const inputProps = getInputProps<T, S, F>(schema, undefined, options);

  const handleChange = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLInputElement>) =>
      onChange(value === "" ? options.emptyValue : value),
    [onChange, options],
  );

  const handleBlur = useCallback(
    ({ target }: FocusEvent<HTMLInputElement>) =>
      onBlur(id, target && target.value),
    [onBlur, id],
  );

  const handleFocus = useCallback(
    ({ target }: FocusEvent<HTMLInputElement>) =>
      onFocus(id, target && target.value),
    [onFocus, id],
  );

  let inputValue;
  if (inputProps.type === "number" || inputProps.type === "integer") {
    inputValue = value || value === 0 ? value : "";
  } else {
    inputValue = value == null ? "" : value;
  }

  return (
    <Input
      id={id}
      name={name}
      value={inputValue}
      disabled={disabled || readonly}
      autoFocus={autofocus}
      {...inputProps}
      onBlur={handleBlur}
      onChange={handleChange}
      onFocus={handleFocus}
    />
  );
}
