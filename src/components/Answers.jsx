import React from "react";
import PropTypes from 'prop-types';
import { auth } from './../firebase.jsx';


function Answers(props) {

  return (
    <div className="answers">
      <div class="relative overflow-x-auto">
        <table class="w-full text-sm">
          <thead class="text-xs text-gray-700 uppercase bg-white dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                
              </th>
              <th scope="col" class="px-6 py-3">
                Answer #1
              </th>
              <th scope="col" class="px-6 py-3">
                Answer #2
              </th>
              <th scope="col" class="px-6 py-3">
                Answer #3
              </th>
              <th scope="col" class="px-6 py-3">
                Answer #4
              </th>
              <th scope="col" class="px-6 py-3">
                Answer #5
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium">
                {}
              </th>
              <td class="px-6 py-4">
                {props.a1}
              </td>
              <td class="px-6 py-4">
                {props.a2}
              </td>
              <td class="px-6 py-4">
                {props.a3}
              </td>
              <td class="px-6 py-4">
                {props.a4}
              </td>
              <td class="px-6 py-4">
                {props.a5}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

Answers.propTypes = {
  a1: PropTypes.string,
  a2: PropTypes.string,
  a3: PropTypes.string,
  a4: PropTypes.string,
  a5: PropTypes.string,
  id: PropTypes.string,
  surveyId: PropTypes.string
}

export default Answers;