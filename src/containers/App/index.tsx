import React from 'react';
import styled, { ThemeProvider as StyledThemeProvider } from 'styled-components';
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
  const { greyMode }: any = useTheme();

  return (
    <>
      <StyledThemeProvider theme={{ greyMode }}>
        <GlobalStyle />
        <Container id='my-did'>
          {/* <Router>
            <Routes> */}
          <HomePage />
          {/* <Route path='/contact' element={<Contact />} /> */}
          {/* </Routes>
          </Router> */}
        </Container>
      </StyledThemeProvider>
    </>
  );
};

export default App;
