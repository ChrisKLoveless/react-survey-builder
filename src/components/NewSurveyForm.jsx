import React from 'react';
import PropTypes from 'prop-types';
import ReusableForm from "./ReusableForm";


function NewSurveyForm(props) {
  function handleNewSurveySubmission(event) {
    event.preventDefault();
    props.onNewSurveyCreation({
      title: event.target.title.value,
      q1: event.target.q1.value,
      q2: event.target.q2.value,
      q3: event.target.q3.value,
      q4: event.target.q4.value,
      q5: event.target.q5.value
    });
  }

  return (
    <div className="survey-form">
      <ReusableForm 
      formSubmissionHandler={handleNewSurveySubmission}
      buttonText="Create Survey!"
      />
    </div>
  );
}

NewSurveyForm.propTypes = {
  onNewSurveyCreation: PropTypes.func
};

export default NewSurveyForm;