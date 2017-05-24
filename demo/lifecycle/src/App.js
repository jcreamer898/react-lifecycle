import React, { Component } from 'react';
import CodeMirror from "react-codemirror";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/jsx/jsx";
import withSteps from "./steps";
import logo from './logo.svg';
import './App.css';
import 'codemirror/lib/codemirror.css';
import "codemirror/addon/selection/active-line";
import "codemirror/addon/display/fullscreen";

const code = `class Editor extends React.Component {
  constructor() {
    this.onType = this.onType.bind(this);
  }
  componentDidMount() {
    ace.editor(this.refs.editor);
  }
  render() {
    return (
      <textarea
        ref={(node) => this.editor = node}
      />
    );
  }
}`;

class App extends Component {
  constructor() {
    super();
    window.addEventListener("hashchange", () => {
      switch(window.location.hash) {
        case "#1": 
          this.highlightLine(1);
          break;
        case "#2": 
          this.highlightLine(7);
          break;
        case "#3": 
          this.highlightLine(4);
          break;
        default:
          this.highlightLine(0);
      }
    });
  }
  componentDidMount() {

  }
  highlightLine(line) {
    this.editor.codeMirror.setSelection({
      line,
      ch: 0,
    });
  }
  render() {
    return (
      <div className="App">
        <div>
          <CodeMirror
            ref={(node) => this.editor = node}
            value={code}
            options={{
              mode: "jsx",
              lineNumbers: true,
              styleActiveLine: true,
              fullScreen: true,
            }}
          />
        </div>
        <div className="Render">
          OH hai
        </div>
      </div>
    );
  }
}

export default withSteps(App);
