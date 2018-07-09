import React from 'react';
import PropTypes from 'prop-types';

export default function Checked(props) {
  return (
    <button className="checkbox icon" onClick={props.onChange}>
      <i className="material-icons"> {props.checked ? 'check_box' : 'check_box_outline_blank'}</i>
    </button>
  )
}
Checked.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
};

