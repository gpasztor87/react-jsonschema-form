import React, { Component } from "react";

import { AlertCircle } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

type Props = {
  children: React.ReactNode;
};

type State =
  | {
      hasError: false;
      error: null;
    }
  | { hasError: true; error: Error };

type Error = { message: string; [key: string]: unknown };

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error: error };
  }

  resetErrorBoundary = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    const { children } = this.props;
    const { error, hasError } = this.state;

    if (hasError) {
      return (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>The following error was encountered:</AlertTitle>
          <AlertDescription>
            <p className="mb-2">{error.message}</p>
            <Button variant="destructive" onClick={this.resetErrorBoundary}>
              Refresh Form
            </Button>
          </AlertDescription>
        </Alert>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
