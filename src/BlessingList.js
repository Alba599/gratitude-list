import React from "react";
import Child from "./Child";

class BlessingList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      display: "",
      myArray: [],
    };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = (event) => {
    this.setState((previousState) => ({
      myArray: [...previousState.myArray, this.state.value],
    }));

    event.preventDefault();
  };

  delete = (index) => {
    this.setState((prevState) => ({
      myArray: prevState.myArray.filter((el, i) => i != index),
    }));
  };

  render() {
    return (
      <div class="myForm">
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              class="col-lg-1 col-centered"
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
              style={{ margin: "20px" }}
              className="form-control"
              placeholder="My list of blessings"
            />
          </label>
          <input
            class="col-lg-1 col-centered"
            type="submit"
            value="Submit"
            style={{ margin: "40px" }}
            className="btn btn-secondary btn-sm"
          />
          <ul>
            <Child delete={this.delete} data={this.state.myArray} />
          </ul>
          {/* <ul>
    {this.state.myArray.map((item) => (
      <li>{item}</li>
    ))}
  </ul> */}
        </form>
      </div>
    );
  }
}

export default BlessingList;
