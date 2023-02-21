import React from "react";
import PropTypes from 'prop-types';

function SurveyDetail(props) {
  const { survey, onClickingEdit, onClickingDelete  } = props;

  return (
    <div className="survey-details">
      <h3>Title: {survey.title}</h3>
      <h6>Question #1: {props.q1}</h6>
      <h6>Question #2: {props.q2}</h6>
      <h6>Question #3: {props.q3}</h6>
      <h6>Question #4: {props.q4}</h6>
      <h6>Question #5: {props.q5}</h6>
      <h6>Id: {props.id}</h6>
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