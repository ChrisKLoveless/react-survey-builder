import React from "react";
import PropTypes from 'prop-types';

function Answers(props) {
  return (
    <div className="answers">
      <h6><strong>Answer #1:</strong> {props.a1}</h6>
      <h6><strong>Answer #2:</strong> {props.a2}</h6>
      <h6><strong>Answer #3:</strong> {props.a3}</h6>
      <h6><strong>Answer #4:</strong> {props.a4}</h6>
      <h6><strong>Answer #5:</strong> {props.a5}</h6>
      <h6><strong>AnswerId:</strong> {props.id}</h6>
      <h6><strong>SurveyId</strong>: {props.surveyId}</h6>
      <hr />
    </div>
  );
}

Answers.propTypes = {
  a1: PropTypes.string,
  a2: PropTypes.string,
  a3: PropTypes.string,
  a4: PropTypes.string,
  a5: PropTypes.string,
  id: PropTypes.string,
  surveyId: PropTypes.string
}

export default Answers;