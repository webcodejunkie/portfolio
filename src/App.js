import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

import Home from './components/home-view/home-component';
import Work from './components/work-view/work-component';
import Navbar from './components/navbar/navbar-component';
import SkullifyView from './components/work-view/project-view/skullify-view';
import MeetappView from './components/work-view/project-view/meetapp-view';
import ChitChatView from './components/work-view/project-view/chichat-view';
import Contact from './components/contact-view/contact-view';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={
          <>
            <Navbar />
            < Home />
          </>} />

        <Route exact path="/contact" element={
          <>
            <Navbar />
            <Contact />
          </>
        } />

        <Route exact path="/projects" element={
          <>
            <Navbar />
            < Work />
          </>
        } />

        <Route exact path="/projects/skullify" element={
          <>
            <SkullifyView />
          </>
        } />

        <Route exact path="/projects/meetapp" element={
          <>
            <MeetappView />
          </>
        } />

        <Route exact path="/projects/chitchat" element={
          <>
            <ChitChatView />
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;
