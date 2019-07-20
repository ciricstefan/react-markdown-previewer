import React, { Component } from "react";
import Preview from "./Preview";

const placeholder = `
# This is a header!

## This is a sub header!

This is a [link](https://www.freecodecamp.com)

This is an, \`<div></div>\`, inline code.

\`\`\`
// Code block?

for (let i = 0; i < 20; i++) {
    console.log("Hey there!")
}
\`\`\`

1. Milk
2. Bread
3. Eggs
4. Orange Juice

> Blockquote

**I am bold text**

![Just an image of a husky](https://i.pinimg.com/originals/cd/a5/1b/cda51b70758b5302de57225b7c52a202.jpg)
`;

export default class Editor extends Component {
  state = {
    markdown: placeholder
  };

  handleChange = event => {
    this.setState({ markdown: event.target.value });
  };

  render() {
    return (
      <div>
        <h2>Editor</h2>
        <textarea
          id="editor"
          value={this.state.markdown}
          onChange={this.handleChange}
        />
        <h2>Preview</h2>
        <Preview markdown={this.state.markdown} />
      </div>
    );
  }
}
