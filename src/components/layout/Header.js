import React from "react";
//bring links
import { Link } from "react-router-dom";

export default function() {
  return (
    <div>
      <header style={headerStyle}>
        <h1> To do list</h1>
        <Link style={linkStyle} to="/">
          Home{" "}
        </Link>{" "}
        |{" "}
        <Link style={linkStyle} to="/about">
          About
        </Link>
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
const linkStyle = {
  color: "#fff",
  textDecoration: "none"
};
