import React, { useState } from "react";
import Values from "values.js";

const Form = ({ setColorList, toast }) => {
  const [color, setColor] = useState("#FF0000");

  const handleChange = (e) => {
    setColor(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      const list = new Values(color).all(10);
      toast.success("Success");
      setColorList(list);
    } catch (error) {
      console.log(error);
      toast.error("Need a full color");
      return;
    }
  };
  return (
    <section className="container">
      <h4>Color Generator</h4>
      <form className="color-form" onSubmit={handleSubmit}>
        <input
          type="color"
          name="colorPicker"
          id="colorPicker"
          value={color}
          onChange={handleChange}
        />
        <input
          type="text"
          name="colorText"
          id="colorText"
          value={color}
          onChange={handleChange}
        />
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </section>
  );
};

export default Form;
