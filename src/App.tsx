import schema from "@/schema.json";

import { SchemaForm } from "@/components/SchemaForm";

import "./App.css";

function App() {
  return (
    <div className="border p-5">
      <SchemaForm schema={schema} onSubmit={(data) => console.log(data)} />
    </div>
  );
}

export default App;
