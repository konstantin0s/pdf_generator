import { Form } from 'formik';
import { styled } from 'styled-components';

export const ContactContainer = styled.div`
  padding: 2rem;
  text-align: center;
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > * {
    margin: 0.5rem 0;
  }
`;

export const Label = styled.label`
  font-weight: bold;
`;

export const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #333;
  color: white;
  border: none;
  cursor: pointer;

  &:disabled {
    background-color: #666;
  }
`;
