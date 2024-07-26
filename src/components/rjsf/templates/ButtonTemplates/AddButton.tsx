import {
  type FormContextType,
  type IconButtonProps,
  type RJSFSchema,
  type StrictRJSFSchema,
  TranslatableString,
} from "@rjsf/utils";
import { PlusIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

export function AddButton<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
>(props: IconButtonProps<T, S, F>) {
  const {
    uiSchema,
    registry: { translateString },
    ...btnProps
  } = props;

  return (
    <Button type="button" variant="secondary" {...btnProps}>
      <PlusIcon className="h-4 w-4 mr-2" />
      {translateString(TranslatableString.AddItemButton)}
    </Button>
  );
}
