import { useState } from 'react';
import Navbar from './Navbar';
const Header = () => {
  const [userName, setUserName] = useState('John');
  const [toggleLogin, setToggleLogin] = useState(false);

  const handleLogin = () => {
    
  }

  return (
    <header>
      <div className="header-layout">
        <h1>🏢 Enterprise Workspace Dashboard</h1>
        <div className="user-info">
          <div className="outer-cycle" onClick={() => setToggleLogin(!toggleLogin)}>
            {userName ? <p>{userName}</p> : <p onClick={() => handleLogin()}>Login</p>}
          </div>
          {
            toggleLogin && (
              <>
                {userName && (
                  <button onClick={() => setUserName('')} className="logout-btn">Logout</button>
                )}
              </>
            )
          }
        </div>
      </div>
      <Navbar />
    </header>
  );
}

export default Header;
