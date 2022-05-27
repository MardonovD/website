import React, { useState } from "react";

const About = () => {
  const [state] = useState({ heading: "Who we Are ?" });
  const [sections] = useState([
    {
      heading: "Digital Marketing",
      text: "Tempore corrupti temporibus fuga earum asperiores fugit",
      id: 1,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2.5rem"
          height="2.5rem"
          fill="currentColor"
          className="bi bi-bag-dash"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M5.5 10a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5z"
          />
          <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
        </svg>
      ),
    },
    {
      id: 2,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2.5rem"
          height="2.5rem"
          fill="currentColor"
          className="bi bi-tv"
          viewBox="0 0 16 16"
        >
          <path d="M2.5 13.5A.5.5 0 0 1 3 13h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zM13.991 3l.024.001a1.46 1.46 0 0 1 .538.143.757.757 0 0 1 .302.254c.067.1.145.277.145.602v5.991l-.001.024a1.464 1.464 0 0 1-.143.538.758.758 0 0 1-.254.302c-.1.067-.277.145-.602.145H2.009l-.024-.001a1.464 1.464 0 0 1-.538-.143.758.758 0 0 1-.302-.254C1.078 10.502 1 10.325 1 10V4.009l.001-.024a1.46 1.46 0 0 1 .143-.538.758.758 0 0 1 .254-.302C1.498 3.078 1.675 3 2 3h11.991zM14 2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h12c2 0 2-2 2-2V4c0-2-2-2-2-2z" />
        </svg>
      ),
      heading: "Web & App Development",
      text: "Tempore corrupti temporibus fuga erum asperiores fugit laudantium",
    },
  ]);
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
        <div className="row  mt-60">
          {sections.map((section) => {
            return (
              <div className="col-4 pl-15" key={section.id}>
                <div className="about__section">
                  <div className="about__section-icon">{section.icon}</div>
                  <div className="about__section-heading">
                    <h6>{section.heading}</h6>
                  </div>
                  <div className="about__section-text ">
                    <p>{section.text}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
