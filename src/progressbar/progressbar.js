import React from "react";
import "./styles.css";

const INTERVAL_FOR_60_FPS = 16.67;

export class ProgressBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      width: 0,
    };
  }

  animateProgressBar(duration, onEnd) {
    const widthIncrement = 100 / (duration / INTERVAL_FOR_60_FPS);

    const timerId = setInterval(() => {
      this.setState(({ width }) => {
        let newWidth = width + widthIncrement;

        if (newWidth > 100) {
          newWidth = 100;
          clearInterval(timerId);
          onEnd();
        }

        return {
          width: newWidth,
        };
      });
    }, INTERVAL_FOR_60_FPS);
  }

  componentDidMount() {
    const { animate, duration, onEnd } = this.props;

    if (animate) {
      this.animateProgressBar(duration, onEnd);
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.animate !== prevProps.animate) {
      const { duration, onEnd } = this.props;
      this.animateProgressBar(duration, onEnd);
    }
  }

  render() {
    const { width } = this.state;

    return (
      <div className="outerDiv">
        <div className="innerDiv" style={{ width: `${width}%` }} />
      </div>
    );
  }
}
