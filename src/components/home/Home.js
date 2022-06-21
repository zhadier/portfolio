import { useRef, useEffect } from "react";
import Typed from "typed.js";
import "./home.scss";
import logo from "../../images/me.jpg";
import BgCanvas from "../bg-canvas/BgCanvas";

const Home = ({ menu }) => {
  const mouseDown = useRef(false);
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "React Developer",
        "Rails Developer",
        "Electrical Engineer",
        "Chess Enthusiast",
      ], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    });
    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className={`home-section ${menu && "open"}`}>
      <BgCanvas mouseDown={mouseDown} />
      <div className="container">
        <div className="row">
          <div className="home-info padd-15">
            <h3 className="hello">
              Hey there, I'm <span className="name">Zeeshan</span>
            </h3>
            <h3 className="my-profession">
              I'm a{" "}
              <span className="typing" ref={el}>
                Web Developer
              </span>
            </h3>
            <p>
              I can help you build a product , feature or website. Look through
              some of my work and experience! If you like what you see and have
              a project you need coded, don’t hestiate to contact me.
            </p>

            <a
              href="#contact"
              className="btn hire-me"
              onTouchStart={() => {
                mouseDown.current = true;
              }}
              onTouchEnd={() => {
                mouseDown.current = true;
              }}
              onMouseDown={() => {
                mouseDown.current = true;
              }}
              onMouseUp={() => {
                mouseDown.current = false;
              }}
            >
              Warp
            </a>
          </div>
          <div className="home-img padd-15">
            <img src={logo} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
