import React from "react";
import { BsCalendar2Date } from "react-icons/bs";
import "./about.scss";

const About = ({ menu }) => {
  return (
    <section className={`about ${menu && "open"}`}>
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>About Me</h2>
          </div>
        </div>
        <div className="row">
          <div className="about-content padd-15">
            <div className="row">
              <div className="about-text">
                <h3>
                  I'm Zeeshan Haider, a <span>Web Developer</span>
                </h3>
                <p>
                  I'm a complex problem-solver with an analytical and driven
                  mindset and yet an organized and cooperative team worker
                  dedicated to achieving demanding development objectives
                  according to tight schedules while producing impeccable code.
                  I'm currently enrolled in a remote web development school
                  called "Microverse" where I code with a diverse group of
                  developers from all over the world, usually via pair
                  programming. I love spending my time doing code reviews,
                  testing, or sometimes just helping my peers out during Scrum
                  meetings. In my free time, I find joy in playing chess and
                  football. I also take pride in being a DSA aficionado and love
                  solving problems for fun
                </p>
              </div>
            </div>
            <div className="row">
              <div className="personal-info padd-15">
                <div className="row">
                  <div className="info-item padd-15">
                    <p>
                      Birthday : <span>12 Nov 1998</span>
                    </p>
                  </div>
                  <div className="info-item padd-15">
                    <p>
                      Age : <span>23</span>
                    </p>
                  </div>
                  <div className="info-item padd-15">
                    <p>
                      Website : <span>github.com/zhadier</span>
                    </p>
                  </div>
                  <div className="info-item padd-15">
                    <p>
                      Email : <span>zhadier39@gmail.com</span>
                    </p>
                  </div>
                  <div className="info-item padd-15">
                    <p>
                      Degree : <span>Electrical Engineering</span>
                    </p>
                  </div>
                  <div className="info-item padd-15">
                    <p>
                      Certifications : <span>Full Stack Developer</span>
                    </p>
                  </div>
                  <div className="info-item padd-15">
                    <p>
                      Phone : <span>+92-3328331524</span>
                    </p>
                  </div>
                  <div className="info-item padd-15">
                    <p>
                      Hobbies : <span>Chess & Football</span>
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="buttons">
                    <a href="#" className="btn">
                      Get Resume
                    </a>
                  </div>
                </div>
              </div>
              <div className="skills padd-15">
                <div className="row">
                  <div className="skill-item">
                    <h3>React</h3>
                    <div className="progress">
                      <div
                        className="progress-in"
                        style={{ width: "80%" }}
                      ></div>
                      <div className="skill-percent">80%</div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <h3>Rails</h3>
                    <div className="progress">
                      <div
                        className="progress-in"
                        style={{ width: "75%" }}
                      ></div>
                      <div className="skill-percent">75%</div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <h3>ES6</h3>
                    <div className="progress">
                      <div
                        className="progress-in"
                        style={{ width: "95%" }}
                      ></div>
                      <div className="skill-percent">95%</div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <h3>Tailwind</h3>
                    <div className="progress">
                      <div
                        className="progress-in"
                        style={{ width: "70%" }}
                      ></div>
                      <div className="skill-percent">70%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="education padd-15">
                <h3 className="title">Education</h3>
                <div className="row">
                  <div className="timeline-box">
                    <div className="timeline shadow-dark">
                      <div className="timeline-item">
                        <div className="circle-dot" />
                        <h3 className="timeline-date">
                          <BsCalendar2Date className="fa fa-calendar" />
                          <i>2017-2021</i>
                        </h3>
                        <h4 className="timeline-title">
                          Bachelors in Electrical Engineering
                        </h4>
                        <p className="timeline-text">
                          - Graduated with Magna Cum Laude grades from NUST, the
                          number 1 ranked Engineering institute in my Country. -
                        </p>
                        <p className="timeline-text">
                          - Lead the final year group project to get exemplary
                          grades, creating a twitter social bot detection
                          software using ML.
                        </p>
                      </div>
                      <div className="timeline-item">
                        <div className="circle-dot" />
                        <h3 className="timeline-date">
                          <BsCalendar2Date className="fa fa-calendar" />
                          <i>2021-2022</i>
                        </h3>
                        <h4 className="timeline-title">
                          Full Stack Web Development Certification
                        </h4>
                        <p className="timeline-text">
                          - Spent 1300+ hours mastering algorithms, data
                          structures, and full-stack development while
                          simultaneously developing projects with Ruby, Rails,
                          JavaScript, React, and Redux.
                        </p>
                        <p className="timeline-text">
                          - Developed skills in remote pair-programming using
                          GitHub, industry-standard git-flow, and daily standups
                          to communicate and collaborate with international
                          remote developers.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="experience padd-15">
                <h3 className="title">Experience</h3>
                <div className="row">
                  <div className="timeline-box">
                    <div className="timeline shadow-dark">
                      <div className="timeline-item">
                        <div className="circle-dot" />
                        <h3 className="timeline-date">
                          <BsCalendar2Date className="fa fa-calendar" />
                          <i>2021-Ongoing</i>
                        </h3>
                        <h4 className="timeline-title">
                          Code Reviewer & Mentor at Microverse
                        </h4>
                        <p className="timeline-text">
                          - Performing code reviews for HTML, Ruby &
                          Javascript-based projects for over 50+ junior
                          developers to ensure their projects comply with style
                          and functionality guidelines and deliver the best code
                          quality.
                        </p>
                        <p className="timeline-text">
                          - Providing specialized technical advice and guidance
                          to multiple junior developers over 1:1 zoom calls.
                        </p>
                      </div>
                      <div className="timeline-item">
                        <div className="circle-dot" />
                        <h3 className="timeline-date">
                          <BsCalendar2Date className="fa fa-calendar" />
                          <i>2017</i>
                        </h3>
                        <h4 className="timeline-title">P&P Intern at ENGRO</h4>
                        <p className="timeline-text">
                          - Produced high-quality documents, spreadsheets, and
                          presentations for internal and customer-facing needs,
                          improving customer satisfaction and speeding up
                          internal processes by a factor of 1.5.
                        </p>
                        <p className="timeline-text">
                          - Performed fault analysis in substation generators
                          and came up with preventive solutions that reduced
                          maintenance downtimes by 120%.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
