import React, { PropTypes }  from 'react';
import { getStyle } from '../utils';

const Button = (props) => {
  return (
    <button
    	style={getStyle( props.colors, !props.invert )}
    	onClick={props.onClick.bind(this)}
    >
      {props.children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node
};

export default Button;