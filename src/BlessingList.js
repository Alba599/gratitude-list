import React from "react";
import Child from "./Child";

class BlessingList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nextId: 0,
      value: "",
      myArray: [],
    };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState((previousState) => {
      var newItem = {
        value: previousState.value,
        id: previousState.nextId,
      };
      return {
        myArray: [...previousState.myArray, newItem],
        nextId: previousState.nextId + 1,
        value: "",
      };
    });
  };

  delete = (index) => {
    this.setState((prevState) => ({
      myArray: prevState.myArray.filter((el, i) => i != index),
    }));
  };

  render() {
    return (
      <div className="myForm">
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              className="form-control"
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
              style={{ margin: "20px" }}
              placeholder="My list of blessings"
            />
          </label>
          <input
            className="btn btn-secondary btn-sm"
            type="submit"
            value="Submit"
            style={{ margin: "40px" }}
          />
          <ul>
            <Child delete={this.delete} data={this.state.myArray} />
          </ul>
        </form>
      </div>
    );
  }
}

export default BlessingList;
