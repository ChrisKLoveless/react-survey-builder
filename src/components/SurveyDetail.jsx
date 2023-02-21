import React from "react";
import PropTypes from 'prop-types';

function SurveyDetail(props) {
  const { survey, onClickingEdit, onClickingDelete  } = props;

  return (
    <div className="survey-details">
      <h2>Survey Details</h2>
      <h3>Title: {survey.title}</h3>
      <h6>Question #1: {survey.q1}</h6>
      <h6>Question #2: {survey.q2}</h6>
      <h6>Question #3: {survey.q3}</h6>
      <h6>Question #4: {survey.q4}</h6>
      <h6>Question #5: {survey.q5}</h6>
      <h6>Id: {survey.id}</h6>
      <button onClick={onClickingEdit}>Update Survey</button>
      <button onClick={() => onClickingDelete(survey.id)}>Delete Survey</button>
    </div>
  );
}

SurveyDetail.propTypes = {
  survey: PropTypes.object,
  onClickingEdit: PropTypes.func,
  onClickingDelete: PropTypes.func
};

export default SurveyDetail;