import React from "react";
import Survey from "./Survey";
import PropTypes from 'prop-types';

function SurveyList(props) {
  return(
    <div className="survey-list">
      {props.surveyList.map((survey) => 
        <Survey 
          whenSurveyClicked={props.onSurveySelection}
          title={survey.title}
          q1={survey.q1}
          q2={survey.q2}
          q3={survey.q3}
          q4={survey.q4}
          q5={survey.q5}
          id={survey.id}
          key={survey.key}
        />
      )}
    </div>
  );
}

SurveyList.propTypes = {
  surveyList: PropTypes.array,
  onSurveySelection: PropTypes.func
}

export default SurveyList;