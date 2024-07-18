import { ErrorMessage, Field, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import { Header } from '../Header';
import { Button, ContactContainer, Label, StyledForm } from './styled';

export const Contact = () => {
  return (
    <>
      <Header />
      <ContactContainer>
        <h1>Contact Me</h1>
        <Formik
          initialValues={{ name: '', email: '', message: '' }}
          validationSchema={Yup.object({
            name: Yup.string().required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
            message: Yup.string().required('Required'),
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              console.log(values);
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <StyledForm>
              <Label htmlFor='name'>Name</Label>
              <Field name='name' type='text' />
              <ErrorMessage name='name' component='div' />

              <Label htmlFor='email'>Email</Label>
              <Field name='email' type='email' />
              <ErrorMessage name='email' component='div' />

              <Label htmlFor='message'>Message</Label>
              <Field name='message' as='textarea' />
              <ErrorMessage name='message' component='div' />

              <Button type='submit' disabled={isSubmitting}>
                Submit
              </Button>
            </StyledForm>
          )}
        </Formik>
      </ContactContainer>
    </>
  );
};
