import React from "react";

class EmailInput extends React.Component {
  state = { email: this.props.defaultEmail };

  handleChange = (event) => {
    this.setState({ email: event.target.value });
  };

  render() {
    return <input onChange={this.handleChange} value={this.state.email} />;
  }
}

export default EmailInput;
