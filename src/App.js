import './output/css/App.css';
import {
	BrowserRouter as Router,
	Route,
	Routes,
} from 'react-router-dom';

import Home from './components/home-view/home-component';
import Work from './components/work-view/work-component';
import Navbar from './components/navbar/navbar-component';
import Footer from './components/footer/footer';
import SkullifyView from './components/work-view/project-view/skullify-view';
import MeetappView from './components/work-view/project-view/meetapp-view';
import ChitChatView from './components/work-view/project-view/chichat-view';
import Contact from './components/contact-view/contact-view';
import AboutView from './components/about-view/about.component';
import Blog from './components/blog-view/blog-component';
import NotFound from './components/404';

function App() {
	return (
		<Router>
			<Routes>
				<Route exact path="/" element={
					<>
						<Navbar />
						<Home />
						<Footer />
					</>} />

				<Route exact path="/contact" element={
					<>
						<Navbar />
						<Contact />
					</>
				} />

				<Route exact path="/aboutme" element={
					<>
						<Navbar />
						<AboutView />
						<Footer />
					</>
				} />

				<Route exact path="/blog" element={
					<>
						<Navbar />
						<Blog />
						<Footer />
					</>
				} />

				<Route exact path="/projects" element={
					<>
						<Navbar />
						<Work />
						<Footer />
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

				<Route path="*" element={
					<>
						<Navbar />
						<NotFound />
						<Footer />
					</>
				} />

			</Routes>
		</Router>
	);
}

export default App;
