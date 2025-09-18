import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { useAuth } from 'authApp/AuthApp';
import { useNavigate } from 'react-router-dom';
const Header = () => {
  const [userName, setUserName] = useState('');
  const [toggleLogin, setToggleLogin] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user.username) {
      setUserName(user.username);
    }
  }, [user]);

  const handleLogout = () => {
    logout();
    setUserName('');
  }

  return (
    <header>
      <div className="header-layout">
        <div className="logo">
          <h1>ERD</h1>
          <p>Enterprise Resource Dashboard</p>
        </div>
        <div className="user-info">
          <div className="outer-cycle" onClick={() => setToggleLogin(!toggleLogin)}>
            {userName ? <p>{userName}</p> : <p onClick={() => navigate('/login')}>Login</p>}
          </div>
        </div>
      </div>
      <div className={`logout-btn-wrapper ${toggleLogin ? 'slide' : ''}`}>
        {
          toggleLogin && (
            <>
              {userName && (
                <button onClick={handleLogout} className="logout-btn">Logout</button>
              )}
            </>
          )
        }
      </div>
      <Navbar />
    </header>
  );
}

export default Header;
