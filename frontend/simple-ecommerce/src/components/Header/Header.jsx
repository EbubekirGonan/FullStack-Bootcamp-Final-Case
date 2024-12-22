import { useNavigate } from 'react-router-dom'
import './Header.css'
import Dropdown from '../Dropdown/Dropdown';
import { useAuth } from '../../hooks/useAuth';

function Header({basket}) {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  return (
    <header>
        <nav className="navbar">
            <div className="logo" onClick={() => navigate('/')}>BestShoppingAddress</div>
            {isAuthenticated &&
            <ul className="nav-links">
                <li><a onClick={() => navigate('/basket')}>
                  <span className='basket-count'>{basket.length}</span>
                  Sepetiniz
                  </a></li>
                <li><Dropdown/></li>
            </ul>
            } 
        </nav>
    </header>
  )
}

export default Header

