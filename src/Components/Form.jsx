import React, { useState } from "react";
import Values from "values.js";

const Form = ({ setColorList, toast }) => {
  const [color, setColor] = useState("");

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
        <input type="color" value={color} onChange={handleChange} />
        <input
          type="text"
          value={color}
          onChange={handleChange}
          placeholder="#b816bb"
        />
        <button type="submit" className="btn" style={{ background: color }}>
          Submit
        </button>
      </form>
    </section>
  );
};

export default Form;
