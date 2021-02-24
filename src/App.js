import "./styles.css";
import "./App.css";
import React, { Fragment } from "react";

// 2da Manera:
export default function App() {
  return (
    <div>
      This is my component:
      <HelloWorld mytext="Hello Fazt" subtitle="loremp ipsum" />
      <HelloWorld mytext="Hola Mundo" subtitle="asdasdasd" />
      <HelloWorld mytext="Hello!" subtitle="component3" />
    </div>
  );
}

class HelloWorld extends React.Component {
  state = {
    show: true
  };
  render() {
    if (this.state.show) {
      return (
        <Fragment>
          <div id="hello">
            <h3>{this.props.subtitle}</h3>
            {this.props.mytext}
            <button onClick={() => this.setState({ show: false })}>
              Toggle show
            </button>
          </div>
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          <h1>No hay Elementos</h1>
          <button onClick={() => this.setState({ show: true })}>
            Toggle Show
          </button>
        </Fragment>
      );
    }
  }
}
