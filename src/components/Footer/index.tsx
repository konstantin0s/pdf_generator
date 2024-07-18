import React from 'react';
import { FooterContainer } from './styled';

export const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; {new Date().getFullYear()} Constantin Tofan. All rights reserved.</p>
    </FooterContainer>
  );
};
