
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
      backgroundColor: "black",
      position: "absolute",
      top: "120px",
      right: 0,
    }}
  ></div>
);

const RIGHT_ARM = (
  <div
    style={{
      width: "100px",
      height: "10px",
      backgroundColor: "black",
      position: "absolute",
      top: "150px",
      right: "-80px",
      transform: "rotate(-45deg)"
    }}
  ></div>
);

const LEFT_ARM = (
    <div
      style={{
        width: "100px",
        height: "10px",
        backgroundColor: "black",
        position: "absolute",
        top: "150px",
        right: "-10px",
        transform: "rotate(45deg)"
      }}
    ></div>
  );

  const RIGHT_LEG = (
    <div
      style={{
        width: "100px",
        height: "10px",
        backgroundColor: "black",
        position: "absolute",
        top: "260px",
        right: "-70px",
        transform: "rotate(-120deg)"
      }}
    ></div>
  );

  const LEFT_LEG = (
    <div
      style={{
        width: "100px",
        height: "10px",
        backgroundColor: "black",
        position: "absolute",
        top: "260px",
        right: "-20px",
        transform: "rotate(-60deg)"
      }}
    ></div>
  );

function HangmanDrawing() {
  return (
    <div style={{ position: "relative" }}>
      {HEAD}
      {BODY}
      {RIGHT_ARM}
      {LEFT_ARM}
      {RIGHT_LEG}
      {LEFT_LEG}
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
