import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <div className="reusable-form">
      <form onSubmit={props.formSubmissionHandler}>
        <input 
        type="text"
        name='title'
        placeholder='Title of Survey' />
        <input 
        type="text"
        name='q1'
        placeholder='Question #1' />
        <input 
        type="text"
        name='q2'
        placeholder='Question #2' />
        <input 
        type="text"
        name='q3'
        placeholder='Question #3' />
        <input 
        type="text"
        name='q4'
        placeholder='Question #4' />
        <input 
        type="text"
        name='q5'
        placeholder='Question #5' />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </div>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;