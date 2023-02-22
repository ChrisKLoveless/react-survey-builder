import React from "react";
import PropTypes from 'prop-types';
import Answers from "./Answers";

function SurveyDetail(props) {
  const { survey, onClickingEdit, onClickingDelete, onClickingAnswer  } = props;
  const surveyAnswers = props.answersList.filter(answers => answers.surveyId === survey.id)

  return (
    <div className="survey-details">
      <h2>Survey Details:</h2>
      <h6><strong>Title:</strong> {survey.title}</h6>
      <h6><strong>Question #1:</strong> {survey.q1}</h6>
      <h6><strong>Question #2:</strong> {survey.q2}</h6>
      <h6><strong>Question #3:</strong> {survey.q3}</h6>
      <h6><strong>Question #4:</strong> {survey.q4}</h6>
      <h6><strong>Question #5:</strong> {survey.q5}</h6>
      <h6><strong>Id:</strong> {survey.id}</h6>
      <hr />
      <h2>Answers List for "{survey.title}"</h2><br />
      
      {surveyAnswers.map((answer) => 
        <Answers 
        a1={answer.a1}
        a2={answer.a2}
        a3={answer.a3}
        a4={answer.a4}
        a5={answer.a5}
        id={answer.id}
        surveyId={answer.surveyId}
        />
      )}
      <hr />
      <button className="btn btn-warning btn-sm" onClick={onClickingEdit}>Update Survey</button>
      <button className="btn btn-danger btn-sm" onClick={() => onClickingDelete(survey.id)}>Delete Survey</button>
      <button className="btn btn-success btn-sm" onClick={() => onClickingAnswer(survey.id)}>Answer Survey</button>
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