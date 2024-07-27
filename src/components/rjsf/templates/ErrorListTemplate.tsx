import {
  type ErrorListProps,
  type FormContextType,
  type RJSFSchema,
  type RJSFValidationError,
  type StrictRJSFSchema,
  TranslatableString,
} from "@rjsf/utils";
import { AlertCircle } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export function ErrorListTemplate<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
>(props: ErrorListProps<T, S, F>) {
  const {
    errors,
    registry: { translateString },
  } = props;

  return (
    <Alert className="mb-2" variant="destructive">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>{translateString(TranslatableString.ErrorsLabel)}</AlertTitle>
      <AlertDescription>
        {errors.map((error: RJSFValidationError, i: number) => {
          return <div key={i}>{error.stack}</div>;
        })}
      </AlertDescription>
    </Alert>
  );
}
