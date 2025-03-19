import { Component } from "react";

class OldLifecycleComponent extends Component {
  componentWillMount() {
    console.log("This is deprecated");
  }

  render() {
    return <div>Old Lifecycle Method</div>;
  }
}

export default OldLifecycleComponent;
