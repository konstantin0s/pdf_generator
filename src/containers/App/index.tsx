import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import styled, { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { Contact } from '../../components/Contact';
import { HomePage } from '../../components/HomePage';
import { ThemeProvider, useTheme } from '../../context/ThemeContext';
import { GlobalStyle } from '../../styles/globalStyles';

const Container = styled.div`
  text-align: center;
`;

const App = () => {
  return (
    <ThemeProvider>
      <ThemedApp />
    </ThemeProvider>
  );
};

const ThemedApp = () => {
  const { greyMode } = useTheme();

  return (
    <>
      <StyledThemeProvider theme={{ greyMode }}>
        <GlobalStyle />
        <Container>
          <Router>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/contact' element={<Contact />} />
            </Routes>
          </Router>
        </Container>
      </StyledThemeProvider>
    </>
  );
};

export default App;
