import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../state-management/actions';

import { useForm } from "react-hook-form";

import Input from "../components/Input";
import Button from "../components/Button";
import Loader from "../components/Loader";

function LoginPage(props) {

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
      const { username, password } = data;
      if (username && password) {
          props.login(username, password);
      }
  }
        const { loading, loggedIn } = props;
       if(loggedIn){
           return <Redirect to="/"/>;
       }
        return (
            <div className="col-md-6 col-md-offset-3">
                <h2>Login</h2>
                <form name="form" onSubmit={handleSubmit(onSubmit)}>
                <Input
                    label="User Name"
                    inputType="text"
                    id="username"
                    className="form-control"
                    errors={errors}
                    refValues={register({ required: true, maxLength: 30 })}
                />

                <Input
                    label="Password"
                    inputType="password"
                    id="password"
                    className="form-control"
                    errors={errors}
                    refValues={register({ required: true, maxLength: 30 })}
                 />
                <div className="form-group">
                    <Button className="btn btn-primary" loader={loading}>Login</Button>
                    <Link to="/register" className="btn btn-link">Register</Link>
                </div>
                </form>
            </div>
        );
}


function mapState(state) {
     const authentication = state?.authentication;
    return { loggedIn : authentication?.loggedIn, loading: authentication?.loading};
}

const actionCreators = {
    login: userActions.login,
    logout: userActions.logout
};

const connectedLoginPage = connect(mapState, actionCreators)(LoginPage);
export { connectedLoginPage as LoginPage };