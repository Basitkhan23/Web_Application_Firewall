import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";
const socialSites = [
  {
    link: "https://twitter.com/cincinnaticodes",
    icon: "icon-social-facebook"
  },
  {
    link: "https://twitter.com/cincinnaticodes",
    icon: "icon-social-twitter"
  },
  {
    link: "https://github.com/cincinnaticodes",
    icon: "icon-social-github"
  }
];
const FooterSection = () => (
  <ScrollableAnchor>
    <footer className="footer text-center" id="contact">
    <div className="container">
      <ul className="list-inline mb-5">
      {socialSites.map((site,index)=>(
        <li className="list-inline-item" key={`social_${index}`}>
          <a className="social-link rounded-circle text-white mr-3" href={site.link}>
            <i className={site.icon} />
          </a>
        </li>
      ))}
      </ul>
    </div>
  </footer>
  </ScrollableAnchor>
);
export default FooterSection;
