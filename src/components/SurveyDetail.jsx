import React from "react";
import PropTypes from 'prop-types';
import Answers from "./Answers";

function SurveyDetail(props) {
  const { survey, onClickingEdit, onClickingDelete, onClickingAnswer  } = props;

  return (
    <div className="survey-details">
      <h2>Survey Details:</h2>
      <h3>Title: {survey.title}</h3>
      <h6>Question #1: {survey.q1}</h6>
      <h6>Question #2: {survey.q2}</h6>
      <h6>Question #3: {survey.q3}</h6>
      <h6>Question #4: {survey.q4}</h6>
      <h6>Question #5: {survey.q5}</h6>
      <h6>Id: {survey.id}</h6>
      <hr />
      <h2>Answers List:</h2>
      {props.answersList.map((answer) => 
        <Answers 
        a1={answer.a1}
        a2={answer.a2}
        a3={answer.a3}
        a4={answer.a4}
        a5={answer.a5}
        id={answer.id}
        />
      )}
      <hr />
      <button onClick={onClickingEdit}>Update Survey</button>
      <button onClick={() => onClickingDelete(survey.id)}>Delete Survey</button>
      <button onClick={() => onClickingAnswer(survey.id)}>Answer Survey</button>
    </div>
  );
}

SurveyDetail.propTypes = {
  survey: PropTypes.object,
  answersList: PropTypes.array,
  onClickingEdit: PropTypes.func,
  onClickingDelete: PropTypes.func,
  onClickingAnswer: PropTypes.func
};

export default SurveyDetail;