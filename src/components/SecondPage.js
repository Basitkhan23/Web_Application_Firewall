import React from "react";

//import Sidebar2 from "./sidebar2";
import Album from "./Album";
import Pricing from "./Pricing";
import FooterSection from "./footer";

//import Router

class SubscribePage extends React.Component {
  render() {
    return (
      <div>
        <Album />
        <Pricing />
        <FooterSection />
      </div>
    );
  }
}
export default SubscribePage;