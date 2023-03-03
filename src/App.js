// Importing necessary components
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  NavLink
} from 'react-router-dom';
import AppContainer from "./components/containers/AppContainer";
import './App.css';
import AboutMe from "./components/AboutMe";
import Portfolio from "../src/components/Portfolio";
// import Contact from "../src/components/Contact";
// import Resume from "../src/components/Resume";


const router = createBrowserRouter(
  createRoutesFromElements(
    <>

      <Route path="/" element={<AppContainer />}>
        <Route index element={<AboutMe />} />
        <Route path="/portfolio" element={<Portfolio />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
        {/* <Route path="/resume" element={<Resume />} /> */}
        <Route path="/:text?" element={<AboutMe />} />
      </Route>
      
    </>
  )
)

function App() {
  return (
    <div className="App">
    <RouterProvider router={router}>
      <AppContainer />
    </RouterProvider>
    </div>
  );
}

export default App;
