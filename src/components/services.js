import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";
const ServicesOffered = [
  {
    title: "Performance",
    description: "Your website wouln't get down because of attacks!",
    icon: "icon-screen-desktop"
  },
  {
    title: "Security",
    description: "DoS protection defend websites from online threats",
    icon: "icon-shield"
  },
  {
    title: "Reliability ",
    description:"Modsecurity Rules make it reliable.",
    /*(
      <span>
        Millions of users <i className="fas fa-heart" /> Start Bootstrap!
      </span>
    ),*/
    icon: "icon-user"
  },
 
   { title: "WAF",
    description: "Protects your internet property with no changes to your existing infrastructure.",
    icon: "icon-lock"
  }
];
const ServicesSections = () => (
  <ScrollableAnchor id="services">
    <section className="content-section bg-primary text-white text-center">
      <div className="container">
        <div className="content-section-heading">
          <h3 className="text-secondary mb-0">Services</h3>
          <h2 className="mb-5">What We Offer</h2>
        </div>
        <div className="row">
          {ServicesOffered.map((service, index) => (
            <div
              className="col-lg-3 col-md-6 mb-5 mb-lg-0"
              key={`service_${index}`}
            >
              <span className="service-icon rounded-circle mx-auto mb-3">
                <i className={service.icon} />
              </span>
              <h4>
                <strong>{service.title}</strong>
              </h4>
              <p className="text-faded mb-0">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </ScrollableAnchor>
);
export default ServicesSections;
