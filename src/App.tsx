import { useCallback, useState } from "react";

import Editor from "@monaco-editor/react";
import { CheckCircleIcon, CircleAlertIcon } from "lucide-react";

import ErrorBoundary from "@/components/ErrorBoundary";
import { Samples } from "@/components/Samples";
import { SchemaForm } from "@/components/rjsf";

import { AppState, useStore } from "@/store";

const selector = (state: AppState) => ({
  schema: state.schema,
  uiSchema: state.uiSchema,
  formData: state.formData,
  setSchema: state.setSchema,
  setUiSchema: state.setUiSchema,
  setFormData: state.setFormData,
});

interface EditorProps {
  title: string;
  data: string;
  setData: (value: string) => void;
}

const EditorView = ({ title, data, setData }: EditorProps) => {
  const [valid, setValid] = useState(true);

  const onCodeChange = useCallback(
    (code: string | undefined) => {
      if (!code) {
        return;
      }

      try {
        const parsed = JSON.parse(code);
        setValid(true);
        setData(parsed);
      } catch (e) {
        setValid(false);
      }
    },
    [setData],
  );

  return (
    <div className="overflow-hidden bg-background border">
      <div className="px-4 py-3 border-b">
        <h3 className="text-base font-semibold leading-6 flex items-center gap-2">
          <div>{title}</div>
          {valid ? (
            <CheckCircleIcon className="h-4 w-4 text-green-500" />
          ) : (
            <CircleAlertIcon className="h-4 w-4 text-destructive" />
          )}
        </h3>
      </div>
      <Editor
        language="json"
        height="40vh"
        value={data}
        theme="vs-light"
        onChange={onCodeChange}
      />
    </div>
  );
};

function App() {
  const { schema, setSchema, uiSchema, setUiSchema, formData, setFormData } =
    useStore(selector);

  const toJson = (val: unknown) => JSON.stringify(val, null, 2);

  return (
    <section className="grid items-center gap-6 pb-8 p-6">
      <div className="flex flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          react-jsonschema-form components <br className="hidden sm:inline" />
          built with Tailwind CSS.
        </h1>
      </div>
      <div className="grid w-full gap-6">
        <Samples />
        <div className="overflow-hidden border bg-background">
          <div className="items-start justify-center gap-6 p-8 md:grid md:grid-cols-2">
            <div className="col-span-2 grid items-start gap-6 lg:col-span-1">
              <div>
                <EditorView
                  title="JSON schema"
                  data={toJson(schema)}
                  setData={setSchema}
                />
              </div>
              <div>
                <EditorView
                  title="UI schema"
                  data={toJson(uiSchema || {})}
                  setData={setUiSchema}
                />
              </div>
              <div>
                <EditorView
                  title="Form data"
                  data={toJson(formData)}
                  setData={setFormData}
                />
              </div>
            </div>
            <div className="col-span-2 grid items-start gap-6 lg:col-span-1">
              <div className="bg-background">
                <div className="border p-5">
                  <ErrorBoundary>
                    <SchemaForm
                      schema={schema}
                      uiSchema={uiSchema}
                      formData={formData}
                      onSubmit={setFormData}
                    />
                  </ErrorBoundary>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
