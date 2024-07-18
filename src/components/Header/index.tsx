import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Nav, NavLink, ThemeToggle } from './styled';

export const Header = () => {
  const { toggleTheme, greyMode } = useTheme();

  return (
    <Nav>
      <NavLink to='/'></NavLink>
      <h1 style={{ color: '#fff', display: 'flex', textAlign: 'center', justifyContent: 'center', marginLeft: 'auto' }}>Pdf generator</h1>
      <ThemeToggle onClick={toggleTheme}>{greyMode ? 'Grey Mode' : 'Light Mode'}</ThemeToggle>
    </Nav>
  );
};
