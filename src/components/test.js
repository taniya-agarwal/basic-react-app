import React from "react";
import logo from "../logo.svg";
import "../App.css";

class Test extends React.Component {
  constructor() {
    super();
    // console.log(this.props)
    this.state = { x: "x", val: ["a", "b", "c"] };
  }
  handleClick = () => {
    // (state, props) => stateChange;
    // this.setState(stateChange, [alert(done)]);
  };

  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/users`)
    // We get the API response and receive data in JSON format...
    .then(response => response.json())
    // ...then we update the users state
    .then(data =>
      // this.setState({
      //   users: data,
      //   isLoading: false,
      // })
      alert(data)
    )
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img
            src={logo}
            className="App-logo"
            alt="logo"
            onClick={() => this.handleClick}
          />
          {this.state.val.map(value => (
            <p>{value}</p>
          ))}
          Learn React {this.props.name} {this.state.x}
        </header>
      </div>
    );
  }
}

export default Test;
