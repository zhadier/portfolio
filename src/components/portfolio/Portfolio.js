import React from "react";
import { useState, useRef, useEffect } from "react";
import "./portfolio.scss";
import eme from "../../images/EmeOlympiad.png";
import rut from "../../images/RentUrTech.png";
import ram from "../../images/RentAMovie.png";
import st from "../../images/SpaceTravellers.png";
import ba from "../../images/BudTab.png";
import tz from "../../images/TwoZero.png";
const Portfolio = ({ menu }) => {
  const [currentFilter, setCurrentFilter] = useState("All");
  const setFilter = (e) => {
    setCurrentFilter(e.target.textContent);
  };
  let filtered = [];

  const projects = useRef([
    {
      name: "EME Olympiad Landing Page",
      description:
        "Eme Olympiad is based on an annual event held in my University, which is basically an extravaganza of concerts, sport events, arts and so on.",
      techs: ["CSS", "HTML", "JavaScript"],
      image: eme,
      linkToLiveVersion: "https://zhadier.github.io/Eme-Olympiad/",
      linkToSource: "https://github.com/zhadier/Eme-Olympiad",
    },
    {
      name: "Rent Ur Tech",
      description:
        "'RentUrTech' is a Full Stack App that provides users with an environment to reserve a specific product for a set amount of time. Thus, in this application users can create an account, get an authorization token, and then retrieve equipment they can reserve from the API. The user is authenticated using a JWT token. For creating and destroying equipment, the user needs to be authorized",
      techs: ["React & Redux", "SCSS", "Ruby on Rails"],
      image: rut,
      linkToLiveVersion: "https://renturtech.netlify.app/",
      linkToSource: "https://github.com/zhadier/RentUrTechFrontend",
    },
    {
      name: "Rent A Movie",
      description:
        "`Rent-A Movie` is a website for movie renting where a user can make reservations, add comments & likes or just get details about movies that they like. It was made use the tvMaze API",
      techs: ["HTML", "SCSS", "JavaScript"],
      image: ram,
      linkToLiveVersion: "https://zhadier.github.io/Rent-A-Movie",
      linkToSource: "https://github.com/zhadier/Rent-A-Movie",
    },
    {
      name: "Two Zero Four Eight",
      description:
        "I was really bored during my mid-summer vacations so I thought why don't we play a game, or even better ~ Make one. One of the most logic extensive JavaScript projects I had the pleasure of remaking",
      techs: ["HTML", "CSS", "JavaScript"],
      image: tz,
      linkToLiveVersion: "https://zhadier.github.io/two-zero-four-eight",
      linkToSource: "https://github.com/zhadier/two-zero-four-eight",
    },
    {
      name: "Space Travellers",
      description:
        '"Space Travelers" is a web application for a company that provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions.',
      techs: ["React & Redux", "SCSS"],
      image: st,
      linkToLiveVersion: "https://space-travelers-az.netlify.app",
      linkToSource: "https://github.com/zhadier/space-travelers",
    },
    {
      name: "Bud-Tab",
      description:
        "Bud-Tab is a mobile web application where users can manage their expenses: A list of transactions associated with a category can be created, so users can see how much money they spend and on what. Authenticated using JWT",
      techs: ["Ruby on Rails", "Postgres", "Tailwind"],
      image: ba,
      linkToLiveVersion: "https://budget-app-zhadier.herokuapp.com/",
      linkToSource: "https://github.com/zhadier/budget-app",
    },
  ]);

  if (currentFilter === "All") {
    filtered = projects.current;
  } else {
    filtered = projects.current.filter((project) =>
      project.techs.includes(currentFilter)
    );
  }
  return (
    <section className={`portfolio ${menu && "open"}`}>
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>Portfolio</h2>
          </div>
        </div>
        <div className="row">
          <div className="portfolio-heading padd-15">
            <h2>My Latest Projects: </h2>
          </div>
        </div>
        <div className="projects">
          <ul className="project-filter">
            <li
              className={`${
                currentFilter === "All" ? "filter-active" : "list-item"
              }`}
              onClick={setFilter}
            >
              All
            </li>
            <li
              className={`${
                currentFilter === "Ruby on Rails"
                  ? "filter-active"
                  : "list-item"
              }`}
              onClick={setFilter}
            >
              Ruby on Rails
            </li>
            <li
              className={`${
                currentFilter === "React & Redux"
                  ? "filter-active"
                  : "list-item"
              }`}
              onClick={setFilter}
            >
              React & Redux
            </li>
            <li
              className={`${
                currentFilter === "JavaScript" ? "filter-active" : "list-item"
              }`}
              onClick={setFilter}
            >
              JavaScript
            </li>
            <li
              className={`${
                currentFilter === "Tailwind" ? "filter-active" : "list-item"
              }`}
              onClick={setFilter}
            >
              Tailwind
            </li>
          </ul>
          <div className="projects-row">
            {filtered?.map((pro) => (
              <div key={pro.name} className="portfolio-item padd-15">
                <div className="portfolio-item-inner shadow-dark">
                  <div className="portfolio-img">
                    <img src={pro.image} alt="" />
                  </div>
                  <h3>{pro.name}</h3>
                  <ul className="techs">
                    {pro.techs.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                  <button type="button" className="btn project-button">
                    See Project
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
