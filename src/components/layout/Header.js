import React from "react";

export default function() {
  return (
    <div>
      <header style={headerStyle}>
        <h1> To do list</h1>
      </header>
    </div>
  );
}
const headerStyle = {
  background: "#333",
  color: "#fff",
  textAlign: "center",
  padding: "10px"
};
