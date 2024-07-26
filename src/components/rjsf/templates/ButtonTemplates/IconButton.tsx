import {
  type FormContextType,
  type IconButtonProps,
  type RJSFSchema,
  type StrictRJSFSchema,
  TranslatableString,
} from "@rjsf/utils";
import { CopyIcon, MinusIcon, MoveDownIcon, MoveUpIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

export function MoveUpButton<
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
    <Button
      type="button"
      size="icon"
      variant="ghost"
      title={translateString(TranslatableString.MoveUpButton)}
      {...btnProps}
    >
      <MoveUpIcon className="h-4 w-4" />
    </Button>
  );
}

export function MoveDownButton<
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
    <Button
      type="button"
      size="icon"
      variant="ghost"
      title={translateString(TranslatableString.MoveDownButton)}
      {...btnProps}
    >
      <MoveDownIcon className="h-4 w-4" />
    </Button>
  );
}

export function CopyButton<
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
    <Button
      type="button"
      size="icon"
      variant="ghost"
      title={translateString(TranslatableString.CopyButton)}
      {...btnProps}
    >
      <CopyIcon className="h-4 w-4" />
    </Button>
  );
}

export function RemoveButton<
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
    <Button
      type="button"
      size="icon"
      variant="ghost"
      title={translateString(TranslatableString.RemoveButton)}
      {...btnProps}
    >
      <MinusIcon className="h-4 w-4 text-destructive" />
    </Button>
  );
}
