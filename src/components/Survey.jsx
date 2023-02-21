import React from 'react';
import PropTypes from 'prop-types'

function Survey(props) {
  return (
    <div className='survey' onClick={() => props.whenSurveyClicked(props.id)}>
      <h4><strong>Survey Title:</strong> </h4>
      <h6>{props.title}</h6>
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