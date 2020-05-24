import React from "react";
import Form from "./Form";
import BlessingList from "./BlessingList";

class HashRouter extends React.Component {
  render() {
    if (this.props.route === "#contact") {
      return <Form />;
    } else {
      return <BlessingList />;
    }
  }
}

export default HashRouter;
