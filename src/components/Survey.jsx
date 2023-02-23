import React from 'react';
import PropTypes from 'prop-types';


function Survey(props) {
  return (
    <div className='survey'>
      <div class="max-w-sm p-6 m-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">{props.title}</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">This survey was created by: </p>
        <p onClick={() => props.whenSurveyClicked(props.id)} class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
          Details
        </p>
      </div>
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
  whenSurveyClicked: PropTypes.func
}

export default Survey;