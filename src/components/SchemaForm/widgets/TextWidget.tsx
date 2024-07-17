import { WidgetProps } from "@rjsf/utils";

import { Input } from "@/components/ui/input";

export function TextWidget(props: WidgetProps) {
  const { id, name, value, onChange } = props;

  return (
    <Input
      id={id}
      name={name}
      value={value}
      onChange={(e) => {
        onChange(e.target.value);
      }}
    />
  );
}
