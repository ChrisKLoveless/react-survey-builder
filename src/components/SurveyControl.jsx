import React, { useState, useEffect } from 'react';
import SurveyList from './SurveyList';
import NewSurveyForm from "./NewSurveyForm";
import SurveyDetail from './SurveyDetail';
import EditSurveyForm from './EditSurveyForm';
import AnswerSurveyForm from './AnswerSurveyForm';
import { db, auth } from '../firebase.jsx';
import { collection, addDoc, onSnapshot, updateDoc, deleteDoc, doc } from 'firebase/firestore';

function SurveyControl() {

  const [mainSurveyList, setMainSurveyList] = useState([]);
  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);
  const [selectedSurvey, setSelectedSurvey] = useState(null);
  const [error, setError] = useState(null);
  const [editing, setEditing] = useState(false);
  const [answerSurveyForm, setAnswerSurveyForm] = useState(false);
  const [mainAnswersList, setMainAnswersList] = useState([]);

  useEffect(() => {
    const unSubscribe = onSnapshot(
      collection(db, "surveys"),
      (collectionSnapshot) => {
        const surveys = [];
        collectionSnapshot.forEach((doc) => {
          surveys.push({
            ...doc.data(),
            id: doc.id
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

  useEffect(() => {
    const unSubscribe = onSnapshot(
      collection(db, "answers"),
      (collectionSnapshot) => {
        const answers = [];
        collectionSnapshot.forEach((doc) => {
          answers.push({
            ...doc.data(),
            id: doc.id
          });
        });
        setMainAnswersList(answers);
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
      setAnswerSurveyForm(false);
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
    await updateDoc(doc(db, "surveys", surveyToEdit.id), surveyToEdit);
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

  const handleAnswerClick = () => {
    setAnswerSurveyForm(true);
  }

  const handleAddingAnswers = async (newAnswerData) => {
    await addDoc(collection(db, "answers"), newAnswerData);
    setAnswerSurveyForm(false);
    setFormVisibleOnPage(false);
    setSelectedSurvey(null);
    setEditing(false);
  }


  if (auth.currentUser == null) {
    return (
      <div className="auth-message">
        <h3>YOU MUST SIGN IN TO ACCESS THE SURVEY LIST</h3>
      </div>
    );
  } else if (auth.currentUser !== null) {

    let currentlyVisibleState = null;
    let buttonText = null;

    if (error) {
      currentlyVisibleState = <p>There was an error: {error}</p>
    } else if (answerSurveyForm) {
      currentlyVisibleState = <AnswerSurveyForm
        survey={selectedSurvey}
        onAnswerSurvey={handleAddingAnswers} />
      buttonText = "Return to Survey List";
    } else if (editing) {
      currentlyVisibleState = <EditSurveyForm
        survey={selectedSurvey}
        onEditSurvey={handleEditingSurveyInList} />
      buttonText = "Return to Survey List";
    } else if (selectedSurvey != null) {
      currentlyVisibleState = <SurveyDetail
        survey={selectedSurvey}
        answersList={mainAnswersList}
        onClickingDelete={handleDeletingSurvey}
        onClickingEdit={handleEditClick}
        onClickingAnswer={handleAnswerClick} />
      buttonText = "Return to Survey List";
    } else if (formVisibleOnPage) {
      currentlyVisibleState = <NewSurveyForm
        onNewSurveyCreation={handleAddingNewSurveyToList} />;
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
}

export default SurveyControl;