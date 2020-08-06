import React from "react";

class PureCompExample extends React.PureComponent {
//   state = {
//     filterText: "ccc",
//   };

  render() {
    return (
      <div>
        {/* {this.state.filterText} */}
        pure comp
        {this.props.name}
      </div>
    );
  }
}

export default PureCompExample;
