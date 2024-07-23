import { useMemo } from "react";

import { WidgetProps } from "@rjsf/utils";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectWidget(props: WidgetProps) {
  const { id, name, placeholder, value, onChange } = props;

  const options = useMemo(() => {
    return (props.schema.enum ?? []).map((id: any) => {
      return { id, name: id };
    });
  }, [props.schema]);

  return (
    <Select
      name={name}
      value={value}
      onValueChange={(value: string) => {
        onChange(value);
      }}
    >
      <>
        <SelectTrigger id={id}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {options.map((option: any) => (
              <SelectItem key={option.id} value={option.id}>
                {option.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </>
    </Select>
  );
}
