import React from "react";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <div className="container">
        <div className="portfolio__section">
          <div className="row">
            <div className="col-4">
              <div className="portfolio__content">
                <h6 className="portfolio__content-h6">EMPLOYEES</h6>
                <h3 className="portfolio__content-h3">OUR TIME.</h3>
              </div>
            </div>
            <div className="col-8">
              <div className="row">
                <div className="col-4  pl-15">
                  <div className="portfolio-card">
                    <div className="portfolio-card-image">
                      <img
                        src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=240&h=750&dpr=1"
                        alt="card"
                      />
                    </div>
                    <h5 className="portfolio__card-name"> Mardonov Doston</h5>
                    <p className="portfolio__card-expert">Full-Stack</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
