const React = require("react");
const ReactDOM = require("react-dom/client");

// const WordRelay = require("./WordRelay-class");
const WordRelay = require("./WordRelay-function");
ReactDOM.createRoot(document.querySelector("#root")).render(<WordRelay />);
