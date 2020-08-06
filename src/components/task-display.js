// a.	Given a list of tasks, render them and style completed tasks differently. Also, have a button for each task to shift the task up when it is clicked
// b.	Also asked him the ideal structure of a task object

import React from "react";
import "../styles/task-display.css";

class TaskDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
    this.addItem = this.addItem.bind(this);
  }

  addItem(e) {
    if (this._inputElement.value !== "") {
      var newItem = {
        text: this._inputElement.value,
        status: "",
      };

      let list = this.state.items;
      list.push(newItem);
      this.setState({ items: list });
      //   this.setState((prevState) => {
      //     return {
      //       items: prevState.items.concat(newItem),
      //     };
      //   });

      this._inputElement.value = "";
    }
    e.preventDefault();
  }

  deleteItem(e, i) {
    let list = this.state.items;
    list.splice(i, 1);
    this.setState({
      items: list,
    });
  }

  moveItem(e, i) {
    e.stopPropagation();
    if (i <= 0) return false;
    let list = this.state.items;
    [list[i], list[i - 1]] = [list[i - 1], list[i]];
    this.setState({
      items: list,
    });
  }

  markDone(e, i) {
    e.stopPropagation();
    let list = this.state.items;
    list[i].status = "completed";
    this.setState({
      items: list,
    });
  }

  render() {
    let { items } = this.state;
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input
              ref={(a) => (this._inputElement = a)}
              placeholder="enter task"
            ></input>
            <button type="submit">add</button>
            <ul className="theList">
              {items.map((item, index) => (
                <li className={item.status} key={index}>
                  {item.text}
                  <button
                    style={{ marginLeft: "20px", marginRight: "20px" }}
                    onClick={(e) => this.moveItem(e, index)}
                  >
                    ^
                  </button>
                  <button
                    style={{ marginRight: "20px" }}
                    onClick={(e) => this.deleteItem(e, index)}
                  >
                    X
                  </button>
                  <button onClick={(e) => this.markDone(e, index)}>Done</button>
                </li>
              ))}
            </ul>
          </form>
        </div>
      </div>
    );
  }
}

export default TaskDisplay;
