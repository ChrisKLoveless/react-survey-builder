import React from "react";
import PropTypes from 'prop-types';
import Answers from "./Answers";
import { auth } from './../firebase.jsx';

function SurveyDetail(props) {
  const { survey, onClickingEdit, onClickingDelete, onClickingAnswer } = props;
  const surveyAnswers = props.answersList.filter(answers => answers.surveyId === survey.id);
  let edit = null;
  let remove = null;

  if (auth.currentUser.uid === survey.userId) {
    edit = <button className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900" onClick={onClickingEdit}>Update Survey</button>;
    remove = <button className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" onClick={() => onClickingDelete(survey.id)}>Delete Survey</button>;
  }

  return (
    <div className="survey-details">

      <div class="relative overflow-x-auto">
        <table class="w-full text-sm">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Title
              </th>
              <th scope="col" class="px-6 py-3">
                Question #1
              </th>
              <th scope="col" class="px-6 py-3">
                Question #2
              </th>
              <th scope="col" class="px-6 py-3">
                Question #3
              </th>
              <th scope="col" class="px-6 py-3">
                Question #4
              </th>
              <th scope="col" class="px-6 py-3">
                Question #5
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium">
                {survey.title}
              </th>
              <td class="px-6 py-4">
                {survey.q1}
              </td>
              <td class="px-6 py-4">
                {survey.q2}
              </td>
              <td class="px-6 py-4">
                {survey.q3}
              </td>
              <td class="px-6 py-4">
                {survey.q4}
              </td>
              <td class="px-6 py-4">
                {survey.q5}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className='font-bold text-xl'>Answers List for "{survey.title}"</h2><br />
      {surveyAnswers.map((answer) =>
        <div className="answers-list">
          <Answers
            a1={answer.a1}
            a2={answer.a2}
            a3={answer.a3}
            a4={answer.a4}
            a5={answer.a5}
            id={answer.id}
            surveyId={answer.surveyId}
          />
        </div>
      )}

      <hr />


      {edit}
      {remove}
      <button className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" onClick={() => onClickingAnswer(survey.id)}>Answer Survey</button>
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