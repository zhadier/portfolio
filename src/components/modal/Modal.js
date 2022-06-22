import { useRef } from "react";
import { AiOutlineClose, AiOutlineGithub } from "react-icons/ai";
import { HiOutlineExternalLink } from "react-icons/hi";
import { useSpring, animated } from "@react-spring/web";

import "./modal.scss";

const Modal = ({ showModal, setShowModal, currentProject }) => {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(30%)`,
    display: "flex",
    justifyContent: "center",
  });

  return showModal ? (
    <div className="modal-background">
      <animated.div style={animation}>
        <div className="modal-wrapper">
          <div
            onClick={() => {
              setShowModal(false);
            }}
            className="modal-close"
          >
            <AiOutlineClose />
          </div>
          <div className="modal-image">
            <img src={currentProject.image} alt="project screenshot" />
          </div>
          <div className="modal-content">
            <h3>{currentProject.name}</h3>
            <ul>
              {currentProject.techs.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
            <p>{currentProject.description}</p>

            <div className="modal-links">
              <a
                target="_blank"
                className="btn"
                href={currentProject.linkToLiveVersion}
              >
                See Live <HiOutlineExternalLink className="live-link" />
              </a>
              <a
                target="_blank"
                className="btn"
                href={currentProject.linkToSource}
              >
                See Source <AiOutlineGithub className="live-link" />
              </a>
            </div>
          </div>
        </div>
      </animated.div>
    </div>
  ) : null;
};

export default Modal;
