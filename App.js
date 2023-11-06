import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hello i'm inside the child "),
    React.createElement("h1", {}, "Hello, I am the second heading"),
    React.createElement("h1", {}, "Hello, I am the third heading"),
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
