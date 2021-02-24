import "./styles.css";
import "./App.css";
import React from "react";

// 1ra Manera:
// const App = () => (
//  <div>
//    This is my Component: <HelloWorld />
//  </div>
// );
// export default App;

// 2da Manera:
//export default function App() {
//  return (
//    <div>
//      This is my component: <HelloWorld />
//    </div>
//  );
// }

// 3ra Manera:
class App extends React.Component {
  render() {
    return (
      <div>
        This is my Component: <HelloWorld />
      </div>
    );
  }
}

export default App;

export function HelloWorld() {
  return <div id="hello">Hello World</div>;
}
