import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-json";

import { Samples } from "@/components/Samples";
import { SchemaForm } from "@/components/rjsf";

import { AppState, useStore } from "@/store";

const selector = (state: AppState) => ({
  schema: state.schema,
  uiSchema: state.uiSchema,
  formData: state.formData,
});

const EditorView = ({ title, data }: { title: string; data: object }) => {
  return (
    <div className="overflow-hidden bg-background border">
      <div className="px-4 py-5 border-b">
        <h3 className="text-base font-semibold leading-6 ">{title}</h3>
      </div>
      <AceEditor
        mode="json"
        readOnly={true}
        value={JSON.stringify(data, null, "\t")}
        style={{ width: "100%" }}
        editorProps={{ $blockScrolling: true }}
      />
    </div>
  );
};

function App() {
  const { schema, uiSchema, formData } = useStore(selector);

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
                <EditorView title="JSON schema" data={schema} />
              </div>
              <div>
                <EditorView title="UI schema" data={uiSchema || {}} />
              </div>
              <div>
                <EditorView title="Form data" data={formData} />
              </div>
            </div>
            <div className="col-span-2 grid items-start gap-6 lg:col-span-1">
              <div className="overflow-hidden bg-background">
                <div className="border p-5">
                  <SchemaForm
                    schema={schema}
                    uiSchema={uiSchema}
                    formData={formData}
                    onSubmit={console.log}
                  />
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
