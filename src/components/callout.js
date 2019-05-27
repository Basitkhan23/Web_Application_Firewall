import React from "react";
import {Link} from "react-router-dom"

class CalloutSection extends React.Component{
  render(){
    return(
      <section className="callout">
    <div className="container text-center">
    <p className="mx-auto mb-5">
        Subscribe WAF to protect your 
        Internet property from common vulnerabilities
        like SQL injection attacks,
        cross-site scripting, and 
        cross-site forgery requests with no changes
         to your existing infrastructure.
      </p>
        <Link to="/subscribe" className="btn btn-primary btn-xl js-scroll-trigger" >Subscribe</Link>
     
    </div>
  </section>
    )
  }
}

export default CalloutSection;
