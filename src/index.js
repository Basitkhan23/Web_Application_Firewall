import React from "react";
import ReactDOM from "react-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/stylish-portfolio.css";
import {BrowserRouter as Router, Route} from "react-router-dom"
import MainPage from "./components/MainPage";
// import FirstPage from "./components/FirstPage"
import SubscribePage from "./components/SubscribePage";

class App extends React.Component {

  componentDidMount(){
    window.localStorage.clear();
  }
  render() {
    return (
      <div>
        
        <Router>
          <Route path="/" exact component={MainPage}/>
          <Route path="/subscribe" component={SubscribePage}/>
        </Router>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
