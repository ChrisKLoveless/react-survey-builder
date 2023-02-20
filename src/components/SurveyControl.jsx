import React, { useState, useEffect } from 'react';
import SurveyList from './SurveyList';
import NewSurveyForm from "./NewSurveyForm";
import SurveyDetail from './SurveyDetail';
import EditSurveyForm from './EditSurveyForm';
import db from '../firebase';
import { collection, addDoc, onSnapshot, updateDoc, deleteDoc, doc } from 'firebase/firestore';

function SurveyControl () {

  const [mainSurveyList, setMainSurveyList] = useState([]);
  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);
  const [selectedSurvey, setSelectedSurvey] = useState(null);
  const [error, setError] = useState(null);
  const [editing, setEditing] = useState(false);

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
    if (selectedSurvey != null) {
      setFormVisibleOnPage(false);
      setSelectedSurvey(null);
      setEditing(false);
    } else {
      setFormVisibleOnPage(!formVisibleOnPage);
    }
  }

  const handleDeletingSurvey = async (id) => {
    await deleteDoc(doc(db, "surveys", id));
    setSelectedSurvey(null);
  }

  const handleEditClick = () => {
    setEditing(true);
  }
  
  const handleEditingSurveyInList = async (surveyToEdit) => {
    const surveyRef = doc(db, "surveys", surveyToEdit.id);
    await updateDoc(surveyRef, surveyToEdit);
    setEditing(false);
    setSelectedSurvey(null);
  }
  
  const handleAddingNewSurveyToList = async (newSurveyData) => {
    await addDoc(collection(db, "surveys"), newSurveyData);
    setFormVisibleOnPage(false);
  }

  const handleChangingSelectedSurvey = (id) => {
    const selection = mainSurveyList.filter(survey => survey.id === id)[0];
    setSelectedSurvey(selection);
  }

  let currentlyVisibleState = null;
  let buttonText = null; 

  if(error) {
    currentlyVisibleState = <p>There was an error: {error}</p>
  } else if (editing) {
    currentlyVisibleState = <EditSurveyForm 
                              survey={selectedSurvey} 
                              onEditSurvey={handleEditingSurveyInList} />
    buttonText = "Return to Survey List";
  } else if (selectedSurvey != null) {
    currentlyVisibleState = <SurveyDetail 
                              survey={selectedSurvey} 
                              onClickingDelete={handleDeletingSurvey}
                              onClickingEdit={handleEditClick} />
    buttonText = "Return to Survey List";
  } else if (formVisibleOnPage) {
    currentlyVisibleState = <NewSurveyForm 
                              onNewSurveyCreation={handleAddingNewSurveyToList}/>;
    buttonText = "Return to Survey List"; 
  } else {
    currentlyVisibleState = <SurveyList 
                              onSurveySelection={handleChangingSelectedSurvey}
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