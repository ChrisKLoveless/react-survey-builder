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
      <h4 className="text-xl font-bold">Complete the Survey: {survey.title}</h4>
      <form onSubmit={handleAnswerSurveyFormSubmission}>
        <label className="font-bold mt-4">{survey.q1}</label><br />
        <input className="border-2 rounded"
        type="text"
        name="a1"
        placeholder="Answer for Question 1" /><br />
        <label className="font-bold mt-4">{survey.q2}</label><br />
        <input className="border-2 rounded"
        type="text"
        name="a2"
        placeholder="Answer for Question 2" /><br />
        <label className="font-bold mt-4">{survey.q3}</label><br />
        <input className="border-2 rounded"
        type="text"
        name="a3"
        placeholder="Answer for Question 3" /><br />
        <label className="font-bold mt-4">{survey.q4}</label><br />
        <input className="border-2 rounded"
        type="text"
        name="a4"
        placeholder="Answer for Question 4" /><br />
        <label className="font-bold mt-4">{survey.q5}</label><br />
        <input className="border-2 rounded mb-4"
        type="text"
        name="a5"
        placeholder="Answer for Question 5" /><br />
        <button type="submit" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Submit Answers</button>
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