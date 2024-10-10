import './App.css';
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route
import Navbar from './component/Navbar';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import AllPosts from './pages/AllPosts';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createpost" element={<CreatePost/>} />
        <Route path="/allposts" element={<AllPosts/>} />
      </Routes>
    </>
  );
}

export default App;
