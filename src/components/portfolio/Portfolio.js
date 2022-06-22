import React from "react";
import { useState, useRef, useEffect } from "react";
import "./portfolio.scss";
import Aos from "aos";
import "aos/dist/aos.css";
import eme from "../../images/EmeOlympiad.png";
import rut from "../../images/RentUrTech.png";
import ram from "../../images/RentAMovie.png";
import st from "../../images/SpaceTravellers.png";
import ba from "../../images/BudTab.png";
import tz from "../../images/TwoZero.png";
import Modal from "../modal/Modal";
const Portfolio = ({ menu }) => {
  const [currentFilter, setCurrentFilter] = useState("All");
  const [showModal, setShowModal] = useState(false);
  const currentProjectRef = useRef(undefined);
  Aos.init({ duration: 1000 });

  const projects = useRef([
    {
      name: "Rent Ur Tech",
      description:
        "'RentUrTech' is a Full Stack App for a rental service that allows a user to reserve a specific product for a set amount of time. Users can create an account, get an authentication token (JWT), and then retrieve data from our API. Additionally, super users can add and delete technologies from the API.",
      techs: ["React & Redux", "SCSS", "Ruby on Rails"],
      image: rut,
      linkToLiveVersion: "https://renturtech.netlify.app/",
      linkToSource: "https://github.com/zhadier/RentUrTechFrontend",
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
        "Bud-Tab is a mobile web application where users can manage their expenses: A list of transactions associated with a category can be created, so users can see how much money they spend and on what. The users are authenticated using Devise",
      techs: ["Ruby on Rails", "Postgres", "Tailwind"],
      image: ba,
      linkToLiveVersion: "https://budget-app-zhadier.herokuapp.com/",
      linkToSource: "https://github.com/zhadier/budget-app",
    },
    {
      name: "Rent A Movie",
      description:
        "`Rent-A Movie` is a simple Vanilla JS website for movie renting where a user can make reservations, add comments & likes or just get details about movies that they like. It was made using the tvMaze API",
      techs: ["HTML", "SCSS", "JavaScript"],
      image: ram,
      linkToLiveVersion: "https://zhadier.github.io/Rent-A-Movie",
      linkToSource: "https://github.com/zhadier/Rent-A-Movie",
    },
    {
      name: "EME Olympiad Landing Page",
      description:
        "`Eme Olympiad` is based on an annual event held in my University. It's an extravaganza of concerts, sport events, arts and other fun activities. Users can use this website to checkout the different events available and get to know the rich history behind Eme Olympiad",
      techs: ["CSS", "HTML", "JavaScript"],
      image: eme,
      linkToLiveVersion: "https://zhadier.github.io/Eme-Olympiad/",
      linkToSource: "https://github.com/zhadier/Eme-Olympiad",
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
  ]);

  const setFilter = (e) => {
    setCurrentFilter(e.target.textContent);
  };

  const openModal = (current) => {
    currentProjectRef.current = current;
    setShowModal(true);
  };

  let filtered = [];

  if (currentFilter === "All") {
    filtered = projects.current;
  } else {
    filtered = projects.current.filter((project) =>
      project.techs.includes(currentFilter)
    );
  }

  return (
    <>
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
                  <div
                    data-aos="fade-right"
                    className="portfolio-item-inner shadow-dark"
                  >
                    <div className="portfolio-img">
                      <img src={pro.image} alt="" />
                    </div>
                    <h3>{pro.name}</h3>
                    <ul className="techs">
                      {pro.techs.map((tech) => (
                        <li key={tech}>{tech}</li>
                      ))}
                    </ul>
                    <button
                      type="button"
                      onClick={() => {
                        openModal(pro);
                      }}
                      className="btn project-button"
                    >
                      See Project
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        currentProject={currentProjectRef.current}
      />
      }
    </>
  );
};

export default Portfolio;
