import { useState } from "react";
import ColorList from "./Components/ColorList";
import Form from "./Components/Form";
import Values from "values.js";
import { ToastContainer, toast } from "react-toastify";

const App = () => {
  const [colorList, setColorList] = useState(new Values("#ff1155").all(10));

  return (
    <main>
      <Form setColorList={setColorList} toast={toast} />

      <ColorList colorList={colorList} toast={toast} />

      <ToastContainer position="top-center" />
    </main>
  );
};
export default App;
