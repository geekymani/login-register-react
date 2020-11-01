import React from "react";
import { useForm } from "react-hook-form";
import { connect } from 'react-redux';

import { userActions } from '../state-management/actions';

import Input from "../components/Input";
import Select from "../components/Select";
import Loader from "../components/Loader";
import Button from "../components/Button";

function RegisterPage(props) {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
      props.register(data);
  }

  return (
      <div className="registration">
          <h4>Registration</h4>
        <form onSubmit={handleSubmit(onSubmit)}>
        <Input
        label="Fist Name"
         inputType="text"
         id="firstName"
         className="form-control"
         errors={errors}
         refValues={register({ required: true, maxLength: 30 })}
        />
    <Input
        label="Last Name"
         inputType="text"
         id="lastName"
         className="form-control"
         errors={errors}
         refValues={register({ required: true, maxLength: 30 })}
        />

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

        <Select
        label="Gender"
        id="gender"
        className="form-control"
        errors={errors}
        refValues={register}
        options={["male", "female", "other"]}
        />

<Select
        label="Country"
        id="country"
        className="form-control"
        errors={errors}
        refValues={register}
        options={["India", "USA", "UK"]}
        />
        <Button className="btn btn-primary" loader={props?.registering}>Register</Button>
    </form>
      </div>
    
  );
}


function mapState(state) {
    const registration = state?.registration;
    return { registering: registration?.registering };
}

const actionCreators = {
    register: userActions.register
}

const connectedRegisterPage = connect(mapState, actionCreators)(RegisterPage);
export { connectedRegisterPage as RegisterPage };