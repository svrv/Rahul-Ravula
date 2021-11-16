import React from "react";
import Tab from "./Tab";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="space-y-5 h-screen flex flex-col" style={{alignItems:'center',backgroundColor:'aliceblue'}}>
        <h2 className="text-4xl font-semibold text-indigo-900" style={{marginTop:'200px'}}>
          Welcome to Quiz program
        </h2>
        <Tab />
      </div>
    );
  }
}

export default Main;
