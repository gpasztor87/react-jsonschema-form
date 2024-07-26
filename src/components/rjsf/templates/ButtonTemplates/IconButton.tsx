import {
  type FormContextType,
  type IconButtonProps,
  type RJSFSchema,
  type StrictRJSFSchema,
  TranslatableString,
} from "@rjsf/utils";
import { CopyIcon, MinusIcon, MoveDownIcon, MoveUpIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

function Hint({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent>
          <p>{label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

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
    <Hint label={translateString(TranslatableString.MoveUpButton)}>
      <Button type="button" size="icon" variant="ghost" {...btnProps}>
        <MoveUpIcon className="h-4 w-4" />
      </Button>
    </Hint>
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
    <Hint label={translateString(TranslatableString.MoveDownButton)}>
      <Button type="button" size="icon" variant="ghost" {...btnProps}>
        <MoveDownIcon className="h-4 w-4" />
      </Button>
    </Hint>
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
    <Hint label={translateString(TranslatableString.CopyButton)}>
      <Button type="button" size="icon" variant="ghost" {...btnProps}>
        <CopyIcon className="h-4 w-4" />
      </Button>
    </Hint>
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
    <Hint label={translateString(TranslatableString.RemoveButton)}>
      <Button type="button" size="icon" variant="ghost" {...btnProps}>
        <MinusIcon className="h-4 w-4 text-destructive" />
      </Button>
    </Hint>
  );
}
