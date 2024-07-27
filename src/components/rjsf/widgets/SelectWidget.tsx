import {
  type FormContextType,
  type RJSFSchema,
  type StrictRJSFSchema,
  type WidgetProps,
} from "@rjsf/utils";

import {
  MultiSelector,
  MultiSelectorContent,
  MultiSelectorInput,
  MultiSelectorItem,
  MultiSelectorList,
  MultiSelectorTrigger,
} from "@/components/ui/multi-select";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectWidget<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
>(props: WidgetProps<T, S, F>) {
  const {
    id,
    options,
    value,
    disabled,
    multiple = false,
    onChange,
    placeholder,
  } = props;
  const { enumOptions, enumDisabled } = options;

  if (multiple) {
    return (
      <MultiSelector
        values={value}
        onValuesChange={(value: string[]) => onChange(value)}
      >
        <MultiSelectorTrigger>
          <MultiSelectorInput placeholder={placeholder} />
        </MultiSelectorTrigger>
        <MultiSelectorContent>
          <MultiSelectorList>
            {Array.isArray(enumOptions) &&
              enumOptions.map(({ value, label }, i) => {
                const disabled =
                  enumDisabled && enumDisabled.indexOf(value) !== -1;
                return (
                  <MultiSelectorItem key={i} value={value} disabled={disabled}>
                    {label}
                  </MultiSelectorItem>
                );
              })}
          </MultiSelectorList>
        </MultiSelectorContent>
      </MultiSelector>
    );
  } else {
    return (
      <Select value={value} disabled={disabled} onValueChange={onChange}>
        <>
          <SelectTrigger id={id}>
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {Array.isArray(enumOptions) &&
                enumOptions.map(({ value, label }, i) => {
                  const disabled =
                    enumDisabled && enumDisabled.indexOf(value) !== -1;
                  return (
                    <SelectItem key={i} value={value} disabled={disabled}>
                      {label}
                    </SelectItem>
                  );
                })}
            </SelectGroup>
          </SelectContent>
        </>
      </Select>
    );
  }
}
