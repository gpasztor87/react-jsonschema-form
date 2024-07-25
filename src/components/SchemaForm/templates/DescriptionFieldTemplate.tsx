import { type DescriptionFieldProps } from "@rjsf/utils";

import { FormDescription } from "@/components/ui/form";

export function DescriptionFieldTemplate(props: DescriptionFieldProps) {
  const { description, id } = props;

  if (description === undefined || description === "") return null;

  if (typeof description === "string") {
    return <FormDescription id={id}>{description}</FormDescription>;
  } else {
    return <div className="text-sm text-muted-foreground">{description}</div>;
  }
}
