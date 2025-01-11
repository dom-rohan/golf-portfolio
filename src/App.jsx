import { BrowserRouter } from 'react-router-dom';
import { Home, Navbar, CoursesPlayed, Scores, Clubs } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-white-100">
        <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
          <Navbar />
          <Home />
        </div>
        <CoursesPlayed />
        <Scores />
        <Clubs />
      </div>
    </BrowserRouter>
  );
};

export default App;
