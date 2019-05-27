import React from "react";

import Sidebar from "./sidebar";
import Header from "./header";
//import AboutSection from "./about";
import ServicesSections from "./services";
import CalloutSection from "./callout";
//import PortfolioSection from "./portfolio";
import FooterSection from "./footer";
import ScrollToTop from "./scrollToTop";
import PortfolioSection2 from "./portfolio2"

class MainPage extends React.Component {
  render() {
    return (
      <div>
        <Sidebar />
        <Header />
        <ServicesSections />
        <CalloutSection />
        <PortfolioSection2 />
        <FooterSection />
        <ScrollToTop />
      </div>
    );
  }
}

export default MainPage;
