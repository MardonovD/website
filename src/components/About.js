import React, { useState } from "react";

const About = () => {
  const [state] = useState({ heading: "Who we Are ?" });
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-3">
            <h4 className="about-h4">{state.heading}</h4>
          </div>
          <div className="col-9">
            <div className="about-text">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit autem illo dignissimos debitis beatae quasi,
                adipisci quam quis voluptas hic provident ratione explicabo sed
                vitae et ea ex, mollitia officiis error qui? Maiores ab alias,
                in et enim quo cum.Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Quod iusto fugiat, sed ex non reiciendis
                aspernatur aut libero, officia quia esse praesentium iure ipsum
                incidunt officiis saepe laborum fuga ratione recusandae alias
                tempora, laudantium enim quas? Quasi eaque aperiam molestias.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <div className="about__section">
            <div className="about__section-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-bag-dash"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.5 10a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5z"
                />
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
              </svg>
            </div>
            <div className="about__section-heading">
              <h6>Digital Marketing</h6>
            </div>
            <div className="about__section-text ">
              <p>
                Tempore corrupti temporibus fuga earum asperiores fugit
                laudantium.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
