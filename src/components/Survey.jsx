import React from 'react';
import PropTypes from 'prop-types';


function Survey(props) {
  return (
    <div className='survey' onClick={() => props.whenSurveyClicked(props.id)}>
      <table className='mt-4'>
        <tr>
          <th className='pl-4'>Survey Title</th>
          <th className='pl-4'>Author</th>
          <th className='pl-4'>Timestamp</th>
        </tr>
        <tr>
          <td>{props.title}</td>
          <td>{props.userId}</td>
          <td>Timestamp goes here</td>
        </tr>
      </table>
    </div>
  );
}

Survey.propTypes = {
  title: PropTypes.string,
  q1: PropTypes.string,
  q2: PropTypes.string,
  q3: PropTypes.string,
  q4: PropTypes.string,
  q5: PropTypes.string,
  id: PropTypes.string,
  userId: PropTypes.string,
  whenSurveyClicked: PropTypes.func
}

export default Survey;