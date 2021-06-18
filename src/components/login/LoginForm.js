import React from 'react';
import { Formik } from 'formik';

import loginSchema from 'schemas/login';
import Input from '../common/input';

const EmailLogin = ({ login }) => (
  <Formik
    initialValues={{
      email: '',
      password: '',
    }}
    validationSchema={loginSchema}
    onSubmit={values => {
      const { email, password } = values;

      login(email, password);
    }}
  >
    {props => (
      <form onSubmit={props.handleSubmit}>
        <div>
          <Input
            id="email"
            labelText="Email"
            name="email"
            required
            initialValue={props.values.email}
            placeholder="Your Email address"
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            error={props.errors.email && props.touched.email ? props.errors.email : false}
          />
        </div>

        <div>
          <Input
            id="password"
            labelText="Password"
            name="password"
            type="password"
            initialValue={props.values.password}
            required
            placeholder="Your Password"
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            error={props.errors.password && props.touched.password ? props.errors.password : false}
          />
        </div>

        <div className="d-flex justify-content-center  ">
          <button type="submit" className="btn btn-primary w-75 my-3">
            Sign In
          </button>
        </div>
      </form>
    )}
  </Formik>
);

export default EmailLogin;
