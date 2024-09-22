import { Routes, Route, Link } from "react-router-dom";
import  About from './About';
import BookingPage from "./BookingPage";
import Main from "./Main";
import Menu from "./Menu";
function Nav() {
    return (
      <nav className="nav"> 
      <Link to="/" className="nav-item">Home</Link>
      <Link to="/about" className="nav-item">About</Link>
      <Link to="/menu" className="nav-item">Menu</Link>
      <Link to="/reservation" className="nav-item">Reservation</Link>
      <Link to="/order" className="nav-item">Order Online</Link>
      <Link to="/login" className="nav-item">Login</Link>
      <Routes>
      <Route path="/" element={<About/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/menu" element={<Main/>}></Route>
      <Route path="/reservation" element={<BookingPage/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/login" element={<About/>}></Route>
    </Routes>

    </nav>
    )
  }
export default Nav;
