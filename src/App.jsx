import { useState } from "react";
import ColorList from "./ColorList";
import Form from "./fORM.JSX";
import Values from "values.js";

const App = () => {
  const [colorsList, setColorsList] = useState(new Values("#FF0000").all(10));
  return (
    <main>
      <Form />
      <ColorList colors={colorsList} />
    </main>
  );
};
export default App;
