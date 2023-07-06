import { useState } from "react";
import ColorList from "./ColorList";
import Form from "./fORM.JSX";
import Values from "values.js";
import { ToastContainer, toast } from "react-toastify";

const App = () => {
  const [colorsList, setColorsList] = useState(new Values("#FF0000").all(10));

  return (
    <main>
      <Form />
      <ColorList colors={colorsList} />
      <ToastContainer position="top-center" />
    </main>
  );
};
export default App;
