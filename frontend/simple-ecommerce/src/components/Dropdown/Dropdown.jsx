import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';


import './Dropdown.css'


function Dropdown () {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
      };

    useEffect(() => {
    const closeMenu = (e) => {
        if (!e.target.closest(".dropdown")) {
        setIsOpen(false);
        }
    };
    document.addEventListener("click", closeMenu);
    return () => document.removeEventListener("click", closeMenu);
    }, []);

    const handleQuit = () => {
        localStorage.removeItem("authToken");
        navigate("/login");
        window.location.reload();
    }


  return (
    <div className="dropdown">
      <button className="dropdown-toggle" onClick={toggleMenu}>
        <div ><img className="avatar" src="Unknown_person.jpg" alt="" /></div>
      </button>

      {isOpen && (
        <div className="dropdown-menu">
          <ul>
            <li onClick={() => navigate("/profile")}><a>Hesabım</a></li>
            <li onClick={handleQuit}><a>Çıkış yap</a></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;


