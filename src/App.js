import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Props from './pages/props';
import State from './pages/state';
import Click from './pages/click';
import Feed from './pages/feed';
import Post from './pages/post';
import Event from './pages/event';
import CommentForm from './pages/comment';
import "./index.css";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/props">Props</Link></li>
          <li><Link to="/event">Add Event</Link></li>
          <li><Link to="/comment">Add Comment</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/props" element={<Props />} />
        <Route path="/state" element={<State />} />
        <Route path="/click" element={<Click />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/feed/:postId" element={<Post />} />
        <Route path="/event" element={<Event />} />
        <Route path="/comment" element={<CommentForm />} />
      </Routes>
    </Router>
  );
}

export default App;
