import React, {useContext} from 'react'
import { Link } from 'react-router-dom';
import { GlobalContext } from './utils/global.context';

const Navbar = () => {
  const { theme, setTheme } = useContext(GlobalContext);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <nav className={theme === 'dark' ? 'dark' : ''}>
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/favs">Favs</Link>
      <button onClick={toggleTheme}>Change theme</button>
    </nav>
  );
};

export default Navbar;