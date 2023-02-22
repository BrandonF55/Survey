import db from './../firebase.jsx';
import EditSurveyForm from './EditSurveyForm.jsx';
import NewSurveyForm from './NewSurveyForm.jsx';
import AnswerList from  './AnswersList.jsx';
import SurveyForm from './SurveyForm.jsx';
import SurveyList from './SurveyList.jsx';
import React, { useState, useEffect } from 'react';
import { collection, addDoc, doc, updateDoc, onSnapshot, deleteDoc } from "firebase/firestore";
import SurveyDetail from './SurveyDetail.jsx';
// import Survey from './Survey.jsx';


function SurveyControl() {

    const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);
    const [mainSurveylist, setMainSurveyList] = useState([]);
    const [selectedSurvey, setSelectedSurvey] = useState(null);
    const [editing, setEditing] = useState(false);
    const [viewDetails, setViewDetails] = useState(false);
    const [error, setError] = useState(null);
    const [yourSurvey, setYourSurveys] = useState(false);
    const [takeSurvey, setTakeSurvey] = useState(false);
    const [viewAnswers, setViewAnswer] = useState(false);
    const [mainAnswersList, setMainAnswersList] = useState([]);
   


    useEffect(() => {
        const unSubscribe = onSnapshot(
            collection(db, 'surveys'),
            (collectionSnapshot) => {
                const surveys = [];
                collectionSnapshot.forEach((doc) => {
                    surveys.push({
                        name: doc.data().name,
                        question1: doc.data().question1,
                        question2: doc.data().question2,
                        question3: doc.data().question3,
                        question4: doc.data().question4,
                        question5: doc.data().question5,
                        id: doc.id
                    });
                });
                setMainSurveyList(surveys)
            },
            (error) => {
                setError(error.message)
            }
        );

        return () => unSubscribe();
    }, []);

    useEffect(() => {
        if (viewAnswers) {
          const unSubscribe = onSnapshot(collection(db, 'answers'),
            (collectionSnapshot) => {
              const answers = [];
              collectionSnapshot.forEach((doc) => {
                answers.push({
                    answer1: doc.data().answer1, 
                    answer2: doc.data().answer2, 
                    answer3: doc.data().answer3, 
                    answer4: doc.data().answer4, 
                    answer5: doc.data().answer5, 
                  id: doc.id
                })
              });
              const filteredAnswers = answers.filter(answer => answer.surveyId === selectedSurvey.id)
                setMainAnswersList(filteredAnswers)
            },
            (error) => {
              setError(error.message);
            }
          );
          return() => unSubscribe();
        }
      }, [viewAnswers]);
    




    const handleClick = () => {
        if (selectedSurvey != null) {
            setFormVisibleOnPage(false);
            setViewDetails(false);
            setSelectedSurvey(null);
            setEditing(false);
            setTakeSurvey(false);
            setViewAnswer(false);
        } else {
            setFormVisibleOnPage(!formVisibleOnPage)
        }
    }

    const handleDeletingSurvey = async (id) => {
        await deleteDoc(doc(db, 'surveys', id));
        setSelectedSurvey(null);
    }

    const handleEditClick = () => {
        setEditing(true)
    }

    const handleTakeSurveyClick = () =>{
        setTakeSurvey(true);
    }

    const handleTakingSurveysClick = () => {
        setYourSurveys(!yourSurvey)
    }

    const handleAnswerClick = () => {
        setViewAnswer(true);
        setViewDetails(false);
    }

    const handleEditingSurveyInList = async (surveyToEdit) => {
        const surveyRef = doc(db, 'surveys', surveyToEdit.id);
        await updateDoc(surveyRef, surveyToEdit);
        setEditing(false);
        setSelectedSurvey(null);
    }

    const handleAddingNewSurveyToList = async (newSurveyData) => {
        const collectionRef = collection(db, 'surveys');
        await addDoc(collectionRef, newSurveyData);
        setFormVisibleOnPage(false);
    }

    const handleAddingAnswerToList = async (newAnswer) => {
        await addDoc(collection(db, 'answers'), newAnswer);
        setTakeSurvey(true);

    }

    const handleAddingAnswersClick = (id) => {
        setSelectedSurvey(mainSurveylist.find(survey => survey.id === id));
        setViewAnswer(true);
      }

    const handleClickingTakeSurvey = (id) => {
        const selection = mainSurveylist.filter(survey => survey.id === id)[0];
        setSelectedSurvey(selection);
    }

    const handleChangingSelectedSurvey = (id) => {
        const selection = mainSurveylist.filter(survey => survey.id === id)[0];
        setSelectedSurvey(selection)
    }


    let currentlyVisibleState = null;
    let buttonText = null;
    let currentSurveyList = null;

    if (error) {
        currentlyVisibleState = <p>There was an error: {error}</p>
    } else if (editing) {


        currentlyVisibleState =
            <EditSurveyForm
                survey={selectedSurvey}
                onEditSurvey={handleEditingSurveyInList} />;
        buttonText = 'Return To Survey list';

    } else if (takeSurvey) {
        currentlyVisibleState =
            <SurveyForm
                survey={selectedSurvey}
                onNewAnswerCreation={handleAddingAnswerToList}/>
        buttonText = 'Return to Survey'

    } else if (formVisibleOnPage) {
        currentlyVisibleState =
            <NewSurveyForm
                onNewSurveyCreation={handleAddingNewSurveyToList} />;
        buttonText = "Return to Survey List";

    } else if (viewDetails) {
        currentlyVisibleState = <SurveyDetail
            survey={selectedSurvey}
              onClickingTakeSurvey={handleClickingTakeSurvey}
                onClickingDelete={handleDeletingSurvey}
                onClickingEdit={handleEditClick} 
                onClickingSurvey={handleTakeSurveyClick}
                onClickingAnswers={handleAddingAnswersClick}/>
                buttonText = 'return to survey list'

    } else if (viewAnswers) {
        currentlyVisibleState =
            <AnswerList
                onSurveySelection={handleChangingSelectedSurvey}
                surveyList={currentSurveyList} 
                answerList={mainAnswersList}/>
        buttonText = "Add Survey"

    } else{ 
        currentSurveyList=
        <SurveyList 
        onSurveySelection={handleChangingSelectedSurvey}
        surveyList={currentSurveyList}/>
    }

    return (
        <React.Fragment>
            {currentlyVisibleState}
            {error ? null : <button onClick={handleClick}>Survey/Home</button>}
            <button onClick={handleTakingSurveysClick}>Take survey</button>
        </React.Fragment>
    )
}

export default SurveyControl;
