import Header from '../header/Header';
import './home.scss';

const Home = () => {
  return (
    <>
      <div className="main-container">
        <Header />
      </div>
      <div className="main-content"></div>
      <section className="home"></section>
    </>
  );
};

export default Home;
