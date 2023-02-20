import React, { useState, useEffect } from 'react';
import SurveyList from './SurveyList';
import NewSurveyForm from "./NewSurveyForm";
import db from '../firebase';
import { collection, addDoc, onSnapshot, updateDoc, deleteDoc, doc } from 'firebase/firestore';

function SurveyControl () {

  const [mainSurveyList, setMainSurveyList] = useState([]);
  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);
  const [error, setError] = useState(null);


  useEffect(() => {
    const unSubscribe = onSnapshot(
      collection(db, "surveys"),
      (collectionSnapshot) => {
        const surveys = [];
        collectionSnapshot.forEach((doc) => {
          surveys.push({
            title: doc.data().title,
            q1: doc.data().q1,
            q2: doc.data().q2,
            q3: doc.data().q3,
            q4: doc.data().q4,
            q5: doc.data().q5,
            id: doc.data().id
          });
        });
        setMainSurveyList(surveys);
      },
      (error) => {
        setError(error.message)
      }
    );
    return () => unSubscribe();
  }, []);

  const handleClick = () => {
    setFormVisibleOnPage(!formVisibleOnPage);
  }

  const handleAddingNewSurveyToList = async (newSurveyData) => {
    await addDoc(collection(db, "surveys"), newSurveyData);
    setFormVisibleOnPage(false);
  }

  let currentlyVisibleState = null;
  let buttonText = null; 

  if(error) {
    currentlyVisibleState = <p>There was an error: {error}</p>
  } else if (formVisibleOnPage) {
    currentlyVisibleState = <NewSurveyForm 
                              onNewSurveyCreation={handleAddingNewSurveyToList}/>;
    buttonText = "Return to Survey List"; 
  } else {
    currentlyVisibleState = <SurveyList 
                              surveyList={mainSurveyList} />;
    buttonText = "Create Survey"; 
  }
  return (
    <React.Fragment>
      {currentlyVisibleState}
      {error ? null : <button className="btn btn-primary btn-sm" onClick={handleClick}>{buttonText}</button>} 
    </React.Fragment>
  );
}

export default SurveyControl;