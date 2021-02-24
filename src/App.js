import "./styles.css";
import "./App.css";
import React from "react";

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

export function HelloWorld(props) {
  return (
    <div id="hello">
      <h3>{props.subtitle}</h3>
      {props.mytext}
    </div>
  );
}

/* class HelloWorld extends React.Component {
  render() {
    return (
      <div id="hello">
        <h3>{props.subtitle}</h3>
        {props.mytext}
      </div>
    )
  }
}
*/
