import db from './../firebase.jsx';
import EditSurveyForm from './EditSurveyForm.jsx';
import NewSurveyForm from './NewSurveyFrom.jsx';
import SurveyList from './SurveyList.jsx';
import React, { useState, useEffect } from 'react';
import { collection, addDoc, doc, updateDoc, onSnapshot, deleteDoc } from "firebase/firestore";
import SurveyDetail from './SurveyDetail.jsx';


function SurveyControl() {

    const [formVisibleOnPage, setFromVisibleOnPage] = useState(false);
    const [mainSurveylist, setMainSurveyList] = useState([]);
    const [selectedSurvey, setSelectedSurvey] = useState(null);
    const [editing, setEditing] = useState(false);
    const [error, setError] = useState(null);


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
               
            }
        );

        return () => unSubscribe();
    }, []);

    const handleClick = () => {
        if (selectedSurvey != null) {
            setFromVisibleOnPage(false);
            // new code!
            setSelectedSurvey(null);
            setEditing(false);
        } else {
            setFromVisibleOnPage(!formVisibleOnPage)
        }
    }

    const handleDeletingSurvey = async (id) => {
        await deleteDoc(doc(db, 'surveys', id));
        setSelectedSurvey(null);
    }

    const handleEditClick = () =>{
        setEditing(true)
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
        setFromVisibleOnPage(false);
    }

    const handleChangingSelectedSurvey = (id) => {
        const selection = mainSurveylist.filter(survey => survey.id === id)[0];
        setSelectedSurvey(selection)
    }


    let currentlyVisibleState = null;
    let buttonText = null;
    if (error) {
        currentlyVisibleState = <p>There was an error: {error}</p>
    } else if (editing) {
        currentlyVisibleState =
            <EditSurveyForm
                survey={selectedSurvey}
                onEditSurvey={handleEditingSurveyInList} />;
        buttonText = 'Return To Survey';
    }else if(selectedSurvey != null) {
        currentlyVisibleState =
        <SurveyDetail
        survey={selectedSurvey}
        onClickingDelete={handleDeletingSurvey}
        onClickingEdit={handleEditClick} />;
        buttonText='Return to survey'
    } else if (formVisibleOnPage) {
        currentlyVisibleState = 
        <NewSurveyForm
        onNewSurveyCreation = {handleAddingNewSurveyToList} />;
        buttonText="Return to Survey List";
    } else {
        currentlyVisibleState = 
        <SurveyList
        onSurveySelection={handleChangingSelectedSurvey}
        surveyList={mainSurveylist} />
        buttonText= "Add Survey"
    }
    
    return (
        <React.Fragment>
            {currentlyVisibleState}
            {error ? null : <button onClick={handleClick}>{buttonText}</button>}
        </React.Fragment>
    )
}

export default SurveyControl;
