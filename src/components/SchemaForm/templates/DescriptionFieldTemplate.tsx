import { type DescriptionFieldProps } from "@rjsf/utils";

export function DescriptionFieldTemplate(props: DescriptionFieldProps) {
  const { description, id } = props;

  if (description === undefined || description === "") {
    return null;
  }

  if (typeof description === "string") {
    return (
      <p id={id} className="text-sm text-destructive">
        {description}
      </p>
    );
  } else {
    return (
      <div id={id} className="text-sm text-muted-foreground">
        {description}
      </div>
    );
  }
}
