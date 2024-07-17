import { FieldTemplateProps } from "@rjsf/utils";

import { Label } from "@/components/ui/label";

export function FieldTemplate(props: FieldTemplateProps) {
  const { id, label, children, errors, required } = props;

  return (
    <div className="mb-4">
      <Label htmlFor={id}>
        {label}
        {required && "*"}
      </Label>
      {children}
      {errors}
    </div>
  );
}
