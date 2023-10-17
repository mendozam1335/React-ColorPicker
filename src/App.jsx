import { useState } from "react";
import ColorList from "./Components/ColorList";
import Form from "./Components/Form";
import Values from "values.js";
import { ToastContainer, toast } from "react-toastify";

const App = () => {
  const [colorList, setColorList] = useState(new Values("#f15025").all(10));

  return (
    <main>
      <section className="container">
        <Form setColorList={setColorList} toast={toast} />
      </section>
      <ColorList colorList={colorList} toast={toast} />

      <ToastContainer position="top-center" />
    </main>
  );
};
export default App;