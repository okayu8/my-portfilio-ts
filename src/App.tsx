import * as React from "react";
import "./App.css";
import Top from "./components/pages/top";
import Profile from "./components/pages/profile";
import SideBar from "./components/organisms/side-bar";
import {
  Route,
  // Link,
  HashRouter as Router
} from "react-router-dom";

class App extends React.Component {
  public render() {
    // const [click, clickSideBar] = React.useState(false);

    return (
      <Router>
        <div className="App">
          <div className="wrap">
            <div className="App-content">
              <Route exact={true} path="/" component={Top} />
              <Route path="/profile" component={Profile} />
            </div>
            <div className="App-footer" />
            <SideBar />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
