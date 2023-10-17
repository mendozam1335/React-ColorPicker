import React from "react";
import SingleColor from "./SingleColor";
import { nanoid } from "nanoid";

const ColorList = ({ colorList, toast }) => {
  return (
    <section className="colors">
      {colorList.map((color, index) => {
        return (
          <SingleColor
            key={nanoid()}
            color={color}
            index={index}
            toast={toast}
          />
        );
      })}
    </section>
  );
};

export default ColorList;
