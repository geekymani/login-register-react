import React from 'react';
import {Button as Btn, Spinner} from "react-bootstrap";
//import PropTypes from 'prop-types';


const Button = props => {

  if(props?.loader){
      return <Btn variant="primary" disabled>
      <Spinner
        as="span"
        animation="grow"
        size="sm"
        role="status"
        aria-hidden="true"
      />
      {props.children}...
    </Btn>
  } else {
    return <button className={props?.className}>{props.children}</button>;
  }
 
}

// Button.propTypes = {
//   handleClick: PropTypes.func,
//   children: PropTypes.
// }

export default Button;
