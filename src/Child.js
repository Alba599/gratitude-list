import React from "react";

class Child extends React.Component {
  delete(index) {
    this.props.delete(index);
  }

  render() {
    return (
      <div>
        {this.props.data.map((el, i) => (
          <div key={i}>
            <span>{el}</span>
            <button onClick={this.delete.bind(this, i)}>delete</button>
          </div>
        ))}
      </div>
    );
  }
}

export default Child;
