import "regenerator-runtime/runtime";
import React from "react";
import ReactDOM from "react-dom";
import Dice from "./components/Dice";

ReactDOM.render(<Dice />, document.querySelector("[data-dice]"));
