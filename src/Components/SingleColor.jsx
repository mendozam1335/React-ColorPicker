import React from "react";

const SingleColor = ({ color, index, toast }) => {
  async function copyToClipboard(text) {
    try {
      await navigator.clipboard.writeText(text);
      console.log("Text copied to clipboard");
      toast.success("Copied to clipboard");
    } catch (error) {
      console.error("Failed to copy text: ", error);
      toast.error("something went wrong");
    }
  }
  return (
    <div
      onClick={() => {
        copyToClipboard(color.hex);
      }}
      className={index > 10 ? "color-light color" : "color"}
      style={{ backgroundColor: `#${color.hex}` }}
    >
      <p className="percent-value">{color.weight}%</p>
      <p className="color-value">#{color.hex}</p>
    </div>
  );
};

export default SingleColor;
