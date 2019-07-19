import React, { Component } from "react";
import Preview from "./Preview";

export default class Editor extends Component {
  render() {
    return (
      <React.Fragment>
        <textarea id="editor" />
        <Preview />
      </React.Fragment>
    );
  }
}
