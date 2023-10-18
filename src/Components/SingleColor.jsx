import React from "react";

const SingleColor = ({ color, index, toast }) => {
  const { hex, weight } = color;
  async function copyToClipboard() {
    try {
      await navigator.clipboard.writeText(`#${hex}`);
      toast.success("Color Copied to Clipboard");
    } catch (error) {
      toast.error("Failed to Copy!");
    }
  }
  return (
    <article
      onClick={() => {
        copyToClipboard();
      }}
      className={index > 10 ? "color-light color" : "color"}
      style={{ backgroundColor: `#${hex}` }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">#{hex}</p>
    </article>
  );
};

export default SingleColor;
