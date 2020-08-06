import React from "react";
import "./App.css";
import Test from "./components/test";
import PureCompExample from "./components/pure";
import EmailInput from "./components/state";
import TaskDisplay from "./components/task-display";

function App() {
  return (
    <div className="App">
      <TaskDisplay />
      {/* <Test name="taniya" /> */}
      {/* <PureCompExample name="taniya" />
      <EmailInput
        defaultEmail='q@abc.com'
        key='123'
      /> */}
    </div>
  );
}

export default App;
