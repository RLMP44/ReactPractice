import React from "react";
import ClassComponent from "./ClassComponent";
import FunctionalComponent from "./FunctionalComponent";

// used to need classes in order to use state
// replaced by using Hooks bc it makes code clearer by removing boilerplate, etc
// hooks only work in functional components and do NOT work in class components
class App extends React.Component {
  render() {
    return <ClassComponent />;
  }
}

export default App;
