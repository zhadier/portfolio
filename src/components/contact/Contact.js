import React from "react";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaAngellist, FaGithub, FaMedium } from "react-icons/fa";
import "./contact.scss";

const Contact = ({ menu }) => {
  return (
    <section className={`contact ${menu && "open"}`}>
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>Contact Me</h2>
          </div>
        </div>
        <h3 className="contact-title padd-15">Do You Have Any Questions ?</h3>
        <h4 className="contact-sub-title padd-15">I'M AT YOUR SERVICE</h4>
        <div className="row">
          <div className="contact-info-item padd-15">
            <div className="icon">
              <a href="https://www.github.com/zhadier" target="_blank">
                <FaGithub className="react-icon" />
              </a>
              <h4>GitHub</h4>
            </div>
          </div>
          <div className="contact-info-item padd-15">
            <div className="icon">
              <a href="https://medium.com/@zhadier39" target="_blank">
                <FaMedium className="react-icon" />
              </a>
              <h4>Medium</h4>
            </div>
          </div>
          <div className="contact-info-item padd-15">
            <div className="icon">
              <a href="https://www.linkedin.com/in/zhadier39/" target="_blank">
                <AiOutlineLinkedin className="react-icon" />
              </a>
              <h4>LinkedIn</h4>
            </div>
          </div>
          <div className="contact-info-item padd-15">
            <div className="icon">
              <a href="https://www.angel.co/u/zhadier39" target="_blank">
                <FaAngellist className="react-icon" />
              </a>
              <h4>AngelList</h4>
            </div>
          </div>
        </div>
        <h3 className="contact-title padd-15">Send Me An Email</h3>
        <h4 className="contact-sub-title padd-15">
          I'm always interested in hearing about new projects, so if you'd like
          to chat please get in touch.
        </h4>
        <div className="row">
          <form
            className="contact-form padd-15"
            action="https://formspree.io/f/xdobnpad"
            method="post"
          >
            <div className="row">
              <div className="form-item col-6 padd-15">
                <div className="form-group">
                  <input
                    type="text"
                    id="name"
                    name="user-name"
                    className="form-control"
                    placeholder="Name"
                    required
                  ></input>
                </div>
              </div>
              <div className="form-item col-6 padd-15">
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="user-email"
                    placeholder="Email"
                    required
                  ></input>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="form-item col-12 padd-15">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                    name="subject"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="form-item col-12 padd-15">
                <div className="form-group">
                  <textarea
                    type="text"
                    className="form-control"
                    placeholder="Message"
                    name="message"
                    id="msg"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="form-item col-12 padd-15">
                <button type="submit" className="btn">
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
