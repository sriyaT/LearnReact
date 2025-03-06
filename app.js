const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    {
      id: "child",
    },
    [
      React.createElement("h1", {}, "I'm an html tag"),
      React.createElement("h2", {}, "I'm an html2 tag"),
    ]
  )
);

/*  React element (object) => HTML(Browser understands) */

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello world from React!"
// );
// console.log(heading); //object
console.log(parent); //object
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
