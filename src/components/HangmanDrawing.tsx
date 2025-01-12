import React from "react";

function HangmanDrawing() {
  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          height: "50px",
          width: "10px",
          backgroundColor: "black",
          top: 0,
          right: 0,
          position: "absolute"
        }}
      ></div>
      <div
        style={{
          height: "10px",
          width: "200px",
          marginLeft: "120px",
          backgroundColor: "black",
        }}
      ></div>
      <div
        style={{
          height: "400px",
          width: "10px",
          marginLeft: "120px",
          backgroundColor: "black",
        }}
      ></div>
      <div
        style={{
          height: "10px",
          width: "250px",
          backgroundColor: "black",
        }}
      ></div>
    </div>
  );
}

export default HangmanDrawing;
