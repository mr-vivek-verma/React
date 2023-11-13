const headings = React.createElement("h1",
{id: "headings",xyz: "abc"},
"Hello world from React");

console.log(headings); //returning object

 const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(headings) 