import Header from '../header/Header';
import './home.scss';
import logo from '../../images/me.jpg';
import BgCanvas from '../bg-canvas/BgCanvas';

const Home = () => {
  return (
    <>

      <div className="main-container">
        <Header />
      </div>
      <div className="main-content">
        <section className="home-section">
        <BgCanvas />
          <div className="container">
            <div className="row">
              <div className="home-info padd-15">
         
                <h3 className="hello">
                  Hey there, I'm <span className="name">Zeeshan</span>
                </h3>
                <h3 className="my-profession">
                  I'm a <span className="typing">Web Developer</span>
                </h3>
                <p>
                  I can help you build a product , feature or website. Look through some of my work
                  and experience! If you like what you see and have a project you need coded, don’t
                  hestiate to contact me.
                </p>

                <a href="#contact" className="btn hire-me">
                  Let's Connect
                </a>
              </div>
              <div className="home-img padd-15">
                <img src={logo} alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
