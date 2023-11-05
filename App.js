// const heading = React.createElement(
//   "h1",
//   { id: "heading", className: "head" },
//   "Hello world from React"
// );

/*
how the DOM tree id creating inside the React

<div id="parent">
    <div id='child'>
        <h1>Hello i'm inside the child</h1>
    </div>
</div>

*/

const heading = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "Hello i'm inside the child")
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
