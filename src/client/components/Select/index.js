import React from "react";

function Input(props) {
    const {id, label, className, refValues, errors, options} = props;
  return (
         <div className={'form-group' + (errors[id] && errors[id]?.type ? ' has-error' : '')}>
                        <label htmlFor={label}>{label}</label>
                         {/* use aria-invalid to indicate field contain error */}

                         <select  className={className} id= {id} name={id} ref={refValues}>
                             {options?.map((option)=>{
                                 return <option key={option} value={option}>{option}</option>
                             })} </select>
    
                          {/* use role="alert" to announce the error message */}
      {errors[id] && errors[id]?.type === "required" && (
        <span role="alert">This is required</span>
      )}
      {errors[id]&& errors[id]?.type === "maxLength" && (
        <span role="alert">Max length exceeded</span>
      )}
    </div>
                    
  );
}


export default Input;