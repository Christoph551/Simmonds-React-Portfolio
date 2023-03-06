// Importing necessary components
import {
  Route,
  Routes,
} from 'react-router-dom';
import AppContainer from "./components/containers/AppContainer";
import './App.css';
import AboutMe from "./components/pages/AboutMe";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";
import Resume from "./components/pages/Resume";


function App() {
  return (
    <div className='App'>

    <Routes>
          <Route path="/Simmonds-React-Portfolio" element={<AppContainer />}>
            <Route index element={<AboutMe />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/:text?" element={<AboutMe />} />
          </Route>
    </Routes>

    </div>
  );
}

export default App;
