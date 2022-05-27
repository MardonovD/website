import React, { useState } from "react";

const Portfolio = () => {
  const [state] = useState([
    {
      id: 1,
      image:
        "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=240&h=750&dpr=1",
      name: "Davronov Askar",
      expert: "Full-Stack",
    },
    {
      id: 2,
      image:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=240&h=750&dpr=1",
      name: "Mardonov Doston",
      expert: "React",
    },
    {
      id: 3,
      image:
        "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=240&h=750&dpr=1",
      name: "Davronov Ashur",
      expert: "Flutter",
    },
  ]);
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
              <div className="row ">
                {state.map((user) => (
                  <div className="col-4  pl-15">
                    <div className="portfolio-card">
                      <div className="portfolio-card-image">
                        <img src={user.image} alt="card" />
                      </div>
                      <h5 className="portfolio__card-name"> {user.name}</h5>
                      <p className="portfolio__card-expert">{user.expert}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
