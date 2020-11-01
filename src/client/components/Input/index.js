import React from "react";

function Input(props) {
    const {id, inputType, label, className, refValues, errors} = props;
  return (
         <div className={'form-group' + (errors[id] && errors[id]?.type ? ' has-error' : '')}>
                        <label htmlFor={label}>{label}</label>
                         {/* use aria-invalid to indicate field contain error */}
      <input
        type={inputType}
        id= {id}
        name= {id}
        className={className}
        aria-invalid={errors[id] ? "true" : "false"}
        ref={refValues}
      />
                          {/* use role="alert" to announce the error message */}
      {errors[id] && errors[id].type === "required" && (
        <span role="alert">This is required</span>
      )}
      {errors[id]&& errors[id]?.type === "maxLength" && (
        <span role="alert">Max length exceeded</span>
      )}
    </div>
                    
  );
}


export default Input;