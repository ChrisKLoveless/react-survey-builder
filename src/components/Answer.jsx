import React from "react";
import PropTypes from 'prop-types';

function Answers(props) {
  return (
    <div className="answer">
      <h4>Answers to @Survey</h4>
      <h6>A1: {props.a1}</h6>
      <h6>A2: {props.a2}</h6>
      <h6>A3: {props.a3}</h6>
      <h6>A4: {props.a4}</h6>
      <h6>A5: {props.a5}</h6>
      <h6>AnswerId: {props.id}</h6>
      <h6>SurveyId: {props.surveyId}</h6>
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