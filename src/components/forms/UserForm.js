import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import publicRequest from '../../services/publicRequest';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext'; // Import useAuth

const SignInForm = () => {
  const [authUser, setAuthUser] = useState(null);

  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const navigate = useNavigate(); 
  const { login } = useAuth(); 

  const handleSubmit = async (values, { setSubmitting }) => {
    console.log("dbdbdbdbdb", values);
  
    try {
      const response = await publicRequest.post('/api/auth/signIn', values);
      console.log('Sign-in successful:', response.data);
  
      if (response.data.message === 'Authenticate Successfully') {
        localStorage.setItem('authUser', JSON.stringify(response.data));

        toast.success('Login Successful'); 
        login();
        navigate('/');
      }
    } catch (error) {
      console.error('Sign-in failed:', error.response.data);
    }
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <Paper elevation={3} style={{ padding: '20px', width: '40%' }}>
            <Typography variant="h4" gutterBottom>
              Sign In
            </Typography>
            <Form>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    type="email"
                    id="email"
                    name="email"
                    label="Email"
                    variant="outlined"
                    fullWidth
                  />
                  <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    type="password"
                    id="password"
                    name="password"
                    label="Password"
                    variant="outlined"
                    fullWidth
                  />
                  <ErrorMessage name="password" component="div" style={{ color: 'red' }} />
                </Grid>
              </Grid>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                disabled={isSubmitting}
                style={{ marginTop: '20px' }}
              >
                Sign In
              </Button>
            </Form>
          </Paper>
        </div>
      )}
    </Formik>
  );
};

export default SignInForm;

