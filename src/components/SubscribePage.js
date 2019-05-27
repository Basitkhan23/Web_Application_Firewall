import React from "react";

//import Router
//import ScrollToTop from "./scrollToTop";
import {BrowserRouter as Router, Route} from "react-router-dom"
import SecondPage from "./SecondPage"
import CheckOut from "./CheckOut"
import Sidebar2 from "./sidebar2";
//import MainPage from "./MainPage";


class SubscribePage extends React.Component {
  render() {
    return (
      <div>
        <Sidebar2 />
        <Router >  
        <Route path="/subscribe" exact component={SecondPage}/>
        <Route path="/subscribe/CheckOut" component={CheckOut}/>
        </Router>
      </div>
    );
  }
}
export default SubscribePage;


