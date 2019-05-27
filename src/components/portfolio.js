import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";
const portfolioItems = [
  {
    imgSrc: "./img/Dos.jpg",
    heading: "DoS Protection",
    description: "A yellow pencil with envelopes on a clean, blue backdrop!"
  },
  {
    imgSrc: "./img/portfolio-2.jpg",
    heading: "Sql Injection",
    description:
      "A dark blue background with a colored pencil, a clip, and a tiny ice cream cone!"
  },
  {
    imgSrc: "./img/GET-request.jpg",
    heading: "Cross Site Scripting",
    description:
      "Strawberries are such a tasty snack, especially with a little sugar on top!"
  },
  {
    imgSrc: "./img/portfolio-4.png",
    heading: "WAF rules",
    description:
      "A yellow workspace with some scissors, pencils, and other objects."
  }
];
const PortfolioSection = () => (
  <ScrollableAnchor id="portfolio">
    <section className="content-section">
      <div className="container">
        <div className="content-section-heading text-center">
          <h3 className="text-secondary mb-0">Portfolio</h3>
          <h2 className="mb-5">Recent Projects</h2>
        </div>
        <div className="row no-gutters">
          {portfolioItems.map((project, index) => (
            <div className="col-lg-6" key={`portfolio_item_${index}`}>
              <a className="portfolio-item" href="https://en.wikipedia.org/wiki/Denial-of-service_attack">
                <span className="caption">
                  <span className="caption-content">
                    <h2>{project.heading}</h2>
                    <p className="mb-0">{project.description}</p>
                  </span>
                </span>
                <img className="img-fluid" src={project.imgSrc} alt="" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  </ScrollableAnchor>
);

export default PortfolioSection;