import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    // THE ONLY PLACE TO DO DIRECT ASSIGNMENT
    this.state = { lat: null, errorMessage: "" };
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        // setState should only be used to assign values into state
        this.setState({ lat: position.coords.latitude });
        // below statement is not valid as we are assigning value
        // this.state = {lat: position.coords.latitude};
      },
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
  }
  //React says we have to define render method, otherwise it throws error.
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (this.state.lat && !this.state.errorMessage) {
      return <div>Latitude: {this.state.lat}</div>;
    }
    return <div>Loading!</div>;
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));
