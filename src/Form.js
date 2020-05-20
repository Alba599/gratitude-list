import React from "react";

import { render } from "react-dom";

// import Form from "./Form";

const Form = () => {
  return (
    <form style={{ margin: "40px" }}>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
        <small id="emailHelp" class="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
        />
      </div>
      <div class="form-group">
        <label for="exampleTextarea">Enter text here</label>
        <textarea class="form-control" id="exampleTextarea" rows="3" />
      </div>

      <div class="form-check">
        <label class="form-check-label">
          <input type="checkbox" class="form-check-input" />
          Check me out
        </label>
      </div>
      <button type="submit" class="btn btn-primary" style={{ margin: "10px" }}>
        Submit
      </button>
    </form>
  );
};

export default Form;
