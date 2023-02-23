import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <div className="reusable-form">
      <form onSubmit={props.formSubmissionHandler}>
        <input className="border-2 rounded"
        type="text"
        name='title'
        placeholder='Title of Survey' />
        <input className="border-2 rounded"
        type="text"
        name='q1'
        placeholder='Question #1' />
        <input className="border-2 rounded"
        type="text"
        name='q2'
        placeholder='Question #2' />
        <input className="border-2 rounded"
        type="text"
        name='q3'
        placeholder='Question #3' />
        <input className="border-2 rounded"
        type="text"
        name='q4'
        placeholder='Question #4' />
        <input className="border-2 rounded"
        type="text"
        name='q5'
        placeholder='Question #5' />
        <button className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" type='submit'>{props.buttonText}</button>
      </form>
    </div>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;