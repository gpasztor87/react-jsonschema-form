import { useState } from "react";

import { FieldTemplateProps } from "@rjsf/utils";
import { ChevronsUpDown } from "lucide-react";

import { FormContext } from "@/components/SchemaForm";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Label } from "@/components/ui/label";

import { cn } from "@/lib/utils";

const fieldIsFoldable = (props: FieldTemplateProps) => {
  const { formContext } = props;
  return formContext.isFoldable;
};

const fieldIsComplex = (props: FieldTemplateProps) => {
  const { schema } = props;
  return schema.type === "array" || schema.type === "object";
};

export function FieldTemplate(props: FieldTemplateProps) {
  const { children, errors } = props;
  const isFoldable = fieldIsFoldable(props);
  const isComplex = fieldIsComplex(props);

  const [isOpen, setIsOpen] = useState(true);

  return (
    <Collapsible disabled={!isFoldable} open={isOpen} onOpenChange={setIsOpen}>
      <div className="flex flex-col gap-2 mb-4">
        <FieldLabel {...props} />
        <CollapsibleContent className={cn(isComplex && "pl-4")}>
          {children}
        </CollapsibleContent>
        {errors}
      </div>
    </Collapsible>
  );
}

function FieldLabel(props: FieldTemplateProps) {
  const { id, label, required, schema } = props;
  const formContext = props.formContext as FormContext;

  const isFoldable = fieldIsFoldable(props);

  if (label === "") return null;

  return (
    <CollapsibleTrigger
      disabled={!isFoldable}
      className="flex items-center gap-2"
    >
      {isFoldable && (
        <Button type="button" size="sm" variant="ghost" className="w-9 p-0">
          <ChevronsUpDown className="h-4 w-4" />
        </Button>
      )}
      <Label htmlFor={id}>
        {label}
        {required && <span className="text-destructive">*</span>}
        {formContext.showTypes && (
          <pre className="italic inline-block ml-2 text-muted-foreground">
            [{schema.type}]
          </pre>
        )}
      </Label>
    </CollapsibleTrigger>
  );
}
