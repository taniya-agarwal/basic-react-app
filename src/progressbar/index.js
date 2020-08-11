import React from "react";
import ReactDOM from "react-dom";
import { ProgressBar } from "./ProgressBar.js";

import "./styles.css";

// 1. Make a progress bar. 400px wide and 40% complete,

// 2. Make the bar animate. 0 to 100% in 3 seconds.

// 3. Make the button spawn progress bars in the container. As soon as a new bar is added, it should animate from 0 to 100% in 3 seconds.

// 4. Make it so only 3 bars can be in progress at the same time. Bars should start in the order in which they were added to the container.

class App extends React.Component {
  constructor(props) {
    super(props);
    this.MAX_PROGRESS_BARS = 3;
    this.state = {
      numOfProgressBars: 0,
      runningWindowEndIndex: this.MAX_PROGRESS_BARS - 1,
    };
  }

  onEnd = () =>
    this.setState(({ runningWindowEndIndex }) => ({
      runningWindowEndIndex: runningWindowEndIndex + 1,
    }));

  render() {
    const { numOfProgressBars, runningWindowEndIndex } = this.state;
    const progressBars = [];

    for (let i = 0; i < numOfProgressBars; i++) {
      progressBars.push(
        <ProgressBar
          key={i}
          animate={i <= runningWindowEndIndex}
          duration={3000}
          onEnd={this.onEnd}
        />
      );
    }

    const addProgressBar = () =>
      this.setState(({ numOfProgressBars }) => ({
        numOfProgressBars: numOfProgressBars + 1,
      }));

    return (
      <div className="App">
        <button className="button" onClick={addProgressBar}>
          Add progress bar
        </button>
        {progressBars}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
