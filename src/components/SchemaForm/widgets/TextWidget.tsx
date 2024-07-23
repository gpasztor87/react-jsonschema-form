import { ChangeEvent, useCallback } from "react";

import { WidgetProps, getInputProps } from "@rjsf/utils";

import { Input } from "@/components/ui/input";

export function TextWidget(props: WidgetProps) {
  const { id, name, onChange, schema, options } = props;
  const inputProps = getInputProps(schema, undefined, options);

  const handleChange = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLInputElement>) =>
      onChange(value === "" ? options.emptyValue : value),
    [onChange, options],
  );

  return <Input id={id} name={name} {...inputProps} onChange={handleChange} />;
}
