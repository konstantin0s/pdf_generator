import React from 'react';
import { PdfPage } from '../../containers/PdfPage';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { Main } from './styled';

export const HomePage = () => {
  return (
    <div id='home'>
      <Header />
      <Main>
        <PdfPage />
      </Main>
      <Footer />
    </div>
  );
};
