import { ChangeEvent, FocusEvent, useCallback } from "react";

import {
  type FormContextType,
  type RJSFSchema,
  type StrictRJSFSchema,
  type WidgetProps,
  getInputProps,
} from "@rjsf/utils";

import { PasswordInput } from "@/components/ui/password-input";

export function PasswordWidget<
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

  return (
    <PasswordInput
      id={id}
      name={name}
      value={value || value === 0 ? value : ""}
      disabled={disabled || readonly}
      autoFocus={autofocus}
      {...inputProps}
      onBlur={handleBlur}
      onChange={handleChange}
      onFocus={handleFocus}
    />
  );
}
