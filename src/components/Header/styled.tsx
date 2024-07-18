import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  padding: 1rem;
  background-color: #638bb3;
`;

export const NavLink = styled(Link)`
  margin: 0 1rem;
  text-decoration: none;
  color: white;

  &:hover {
    text-decoration: underline;
  }
`;

export const ThemeToggle = styled.button`
  margin-left: auto;
  padding: 0.5rem;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
`;
