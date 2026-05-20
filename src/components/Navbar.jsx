import { FaPlaneDeparture, FaBars, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  //  SCROLL EFFECT
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">

        {/* LEFT - LOGO */}
        <div className="logo">
          <FaPlaneDeparture className="logo-icon" />
          <span>Sondhi Travels</span>
        </div>

        {/* HAMBURGER */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* RIGHT */}
        <div className={`nav-right ${menuOpen ? "active" : ""}`}>
          <div className="nav-links">
            
            <span>Support</span>
          </div>

          <div className="nav-actions">
            <button className="btn-outline">Partner Login</button>
            <button className="btn-filled">Customer Login</button>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Navbar;