import React from "react";
import PropTypes from "prop-types";

function AnswerSurveyForm(props) {
  const { survey } = props;

  function handleAnswerSurveyFormSubmission(event) {
    event.preventDefault();
    props.onAnswerSurvey({
      a1: event.target.a1.value,
      a2: event.target.a2.value,
      a3: event.target.a3.value,
      a4: event.target.a4.value,
      a5: event.target.a5.value,
      surveyId: survey.id
    })
  }

  return (
    <div className="answer-form">
      <h4>Complete the Survey: {survey.title}</h4>
      <form onSubmit={handleAnswerSurveyFormSubmission}>
        <label>{survey.q1}</label>
        <input 
        type="text"
        name="a1"
        placeholder="Answer for Question 1" />
        <label>{survey.q2}</label>
        <input 
        type="text"
        name="a2"
        placeholder="Answer for Question 2" />
        <label>{survey.q3}</label>
        <input 
        type="text"
        name="a3"
        placeholder="Answer for Question 3" />
        <label>{survey.q4}</label>
        <input 
        type="text"
        name="a4"
        placeholder="Answer for Question 4" />
        <label>{survey.q5}</label>
        <input 
        type="text"
        name="a5"
        placeholder="Answer for Question 5" />
        <button type="submit">Submit Answers</button>
      </form>
    </div>
  );
}

AnswerSurveyForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  onAnswerSurvey: PropTypes.func,
  survey: PropTypes.object
};

export default AnswerSurveyForm;