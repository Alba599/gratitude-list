import React from "react";

class Child extends React.Component {
  delete(index) {
    this.props.delete(index);
  }

  render() {
    console.log(this.props.data);

    return (
      <div>
        {this.props.data.map((el, i) => (
          <div key={el.id}>
            <span>{el.value}</span>
            <button
              style={{ margin: "5px" }}
              onClick={this.delete.bind(this, i)}
            >
              delete
            </button>
          </div>
        ))}
      </div>
    );
  }
}

export default Child;
