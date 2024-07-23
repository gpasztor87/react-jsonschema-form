import { schema, uiSchema } from "@/schema";

import { SchemaForm } from "@/components/SchemaForm";

import "./App.css";

function App() {
  return (
    <div className="border p-5">
      <SchemaForm schema={schema} uiSchema={uiSchema} onSubmit={console.log} />
    </div>
  );
}

export default App;
