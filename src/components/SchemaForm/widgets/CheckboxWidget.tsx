import type { WidgetProps } from "@rjsf/utils";

import { Checkbox } from "@/components/ui/checkbox";

export function CheckboxWidget(props: WidgetProps) {
  const { id, onChange, value } = props;

  return (
    <Checkbox
      id={id}
      checked={value}
      onCheckedChange={() => onChange(!value)}
    />
  );
}
