import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Navbar, CoursesPlayed, Scores, Clubs } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-white-100">
        <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<CoursesPlayed />} />
            <Route path="/scores" element={<Scores />} />
            <Route path="/clubs" element={<Clubs />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
