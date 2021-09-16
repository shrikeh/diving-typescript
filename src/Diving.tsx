import React from "react";
import ReactDOM from "react-dom";
import { Route } from "react-router-dom";
import { App } from "~app/App";

export function diving(): void {
  ReactDOM.render(
    <App />,
    document.getElementById("root")
  );
}

export default diving;

