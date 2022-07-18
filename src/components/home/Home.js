import { useRef, useEffect } from 'react';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { FaAngellist, FaGithub, FaMedium } from 'react-icons/fa';
import Typed from 'typed.js';
import './home.scss';
import logo from '../../assets/images/me.jpg';
import BgCanvas from '../bg-canvas/BgCanvas';

const Home = ({ menu }) => {
  const mouseDown = useRef(false);
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        'React Developer',
        'Rails Developer',
        'Electrical Engineer',
        'Chess Enthusiast',
      ], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    });
    // Destroying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <BgCanvas mouseDown={mouseDown} />
      <section className={`home-section ${menu && 'open'}`}>
        <ul className="social-links">
          <li>
            <a target="_blank" href="https://github.com/zhadier" rel="noreferrer">
              <FaGithub />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.linkedin.com/in/zhadier39/" rel="noreferrer">
              <AiOutlineLinkedin />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://medium.com/@zhadier39" rel="noreferrer">
              <FaMedium />
            </a>
          </li>

          <li>
            <a target="_blank" href="https://www.angel.co/u/zhadier39" rel="noreferrer">
              <FaAngellist />
            </a>
          </li>
        </ul>
        <div className="container">
          <div className="row">
            <div className="home-info padd-15">
              <h3 className="hello">
                Hey there, I'm
                {' '}
                <span className="name">Zeeshan</span>
              </h3>
              <h3 className="my-profession">
                I'm a
                {' '}
                <span className="typing" ref={el} />
              </h3>
              <p>
                I can help you build a product , feature or website. Look
                through some of my work and experience! If you like what you see
                and have a project you need coded, don’t hestiate to contact me.
              </p>

              <button
                type="button"
                className="btn hire-me"
                onTouchStart={() => {
                  mouseDown.current = !mouseDown.current;
                }}
                onMouseDown={() => {
                  mouseDown.current = true;
                }}
                onMouseUp={() => {
                  mouseDown.current = false;
                }}
              >
                Warp
              </button>
            </div>
            <div className="home-img padd-15">
              <img src={logo} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
