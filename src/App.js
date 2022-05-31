import Home from './components/home/Home';
import Header from './components/header/Header';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
      <Routes>
       <Route path="/" element={<Home />} />
      </Routes>
  );
}

export default App;
