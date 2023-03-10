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
              <Route path="/Simmonds-React-Portfolio/Portfolio" element={<Portfolio />} />
              <Route path="/Simmonds-React-Portfolio/Contact" element={<Contact />} />
              <Route path="/Simmonds-React-Portfolio/Resume" element={<Resume />} />
              <Route path="/Simmonds-React-Portfolio/:text?" element={<AboutMe />} />
            </Route>
      </Routes>

    </div>
  );
}

export default App;
