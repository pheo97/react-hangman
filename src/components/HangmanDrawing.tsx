import React from "react";

const HEAD = (
  <div
    style={{
      width: "50px",
      height: "50px",
      borderRadius: "100%",
      border: "10px solid black",
      position: "absolute",
      top: "50px",
      right: "-30px",
    }}
  ></div>
);

const BODY = (
    <div
      style={{
        width: "10px",
        height: "100px",
        backgroundColor:"black",
        position: "absolute",
        top: "120px",
        right: 0,
      }}
    ></div>
  );

function HangmanDrawing() {
  return (
    <div style={{ position: "relative" }}>
      {HEAD}
      {BODY}
      <div
        style={{
          height: "50px",
          width: "10px",
          backgroundColor: "black",
          top: 0,
          right: 0,
          position: "absolute",
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
