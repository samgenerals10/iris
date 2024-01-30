// Main.js
import React from "react";
import Button from "react-bootstrap/Button";

const Main = ({ isNightMode, toggleMode }) => {
  return (
    <div
      className={isNightMode ? "night-mode" : "day-mode"}
      style={{
        width: "fit-content",
        margin: "auto",
        backgroundColor: isNightMode ? "#333" : "#fff",
        color: isNightMode ? "#fff" : "#000",
        padding: "20px",
      }}
    >
      <h1>GeeksforGeeks</h1>
      <strong>React Bootstrap Dark/Light mode</strong>
      <Button variant="primary" onClick={toggleMode}>
        Toggle Mode
      </Button>
    </div>
  );
};

export default Main;
