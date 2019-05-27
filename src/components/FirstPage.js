import React from "react";
import {Link } from "react-router-dom"


class FirstPage extends React.Component {
  render() {
    return (
      <div>
        First Page is Here!
        <Link to="/subscribe" >Sub</Link>
      </div>
    );
  }
}
export default FirstPage;


