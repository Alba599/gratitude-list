import React from "react";

import "bootstrap/dist/css/bootstrap.css";
import NavBar from "./NavBar";
import HashRouter from "./HashRouter";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: "#",
    };

    this.updateRoute = this.updateRoute.bind(this);
  }

  updateRoute(hash) {
    this.setState({ route: hash });
  }

  render() {
    return (
      <React.Fragment>
        <NavBar updateHandler={this.updateRoute} />
        <HashRouter route={this.state.route} />
      </React.Fragment>
    );
  }
}

export default App;
