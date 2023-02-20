import React from 'react';
import PropTypes from 'prop-types'

function Survey(props) {
  return (
    <div className='survey' onClick={() => props.whenSurveyClicked(props.id)}>
      <h3>Survey Title: {props.title}</h3>
      <h6>Question #1: {props.q1}</h6>
      <h6>Question #2: {props.q2}</h6>
      <h6>Question #3: {props.q3}</h6>
      <h6>Question #4: {props.q4}</h6>
      <h6>Question #5: {props.q5}</h6>
    </div>
  )
}

Survey.propTypes = {
  title: PropTypes.string,
  q1: PropTypes.string,
  q2: PropTypes.string,
  q3: PropTypes.string,
  q4: PropTypes.string,
  q5: PropTypes.string,
  id: PropTypes.string,
  whenSurveyClicked: PropTypes.func
}

export default Survey;