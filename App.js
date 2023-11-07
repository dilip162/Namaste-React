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

// const newHeading = <h1 id="newHead">This is the heading in the jsx</h1>;

// console.log(newHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
// root.render(newHeading);

// functional components

// component composition = component inside the component

const HeadComponent2 = () => (
  <div className="wrapper">
    <h1>line 1 in HeadComponent2</h1>
    <h1>line 2 in HeadComponent2</h1>
  </div>
);

const ReactElem = (
  <h1 className="ReactEle" id="NewReactElem">
    I am a React Element
  </h1>
);

const MyName = "Dilip Baghel";

const HeadComponent = () => {
  return (
    <div className="container">
      <h1>My name is {MyName}</h1>
      {ReactElem}
      <h1>Hello, i am inside the functional component</h1>
      <h2>The below is HeadComponent2 content </h2>
      <HeadComponent2 />

      {/* another way of calling react component */}
      {/* {HeadComponent2()} */}
    </div>
  );
};

root.render(<HeadComponent />);
