/**
* <div id="parent">
<div id ="child">
<h1>I am h1 tag</h1>
</div>
</div>
*
*
* 
**/

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "I am an h1 tag")
  )
);

const heading = React.createElement("h1", { id: "heading" }, "Revising React");
console.log(heading); //object h1 tag is object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
root.render(parent);
// object is a react element
//render converts object in tag.
//react element -> obj -> becomes HTML
