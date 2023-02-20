import db from './../firebase.jsx';
import EditSurveyForm from './EditSurveyForm.jsx';
import newSurveyForm from './NewSurveyFrom.jsx';
import React, { useState, useEffect } from 'react';
import { collection, addDoc, doc, updateDoc, onSnapshot, deleteDoc } from "firebase/firestore";


function SurveyControl() {

    const [formVisibleOnPage, setFromVisibleOnPage] = useState(false);
    const [mainSurveylist, setMainSurveyList] = useState([]);
    const [selectedSurvey, setSelectedSurvey] = useState(null);
    const [editing, setEditing] = useState(false);
    const [error, setError] = useState(null);


    useEffect(() => {
        const unSubscribe = onSnapshot(
            collection(db, 'survey'),
            (collectionSnapshot) => {
                const surveys = [];
                collectionSnapshot.forEach((doc) => {
                    surveys.push({
                        question1: doc.data().question1,
                        question2: doc.date().question2,
                        question3: doc.date().question3,
                        question4: doc.date().question4,
                        question5: doc.date().question5,
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
        if (this.state.selectedSurvey != null) {
            setFromVisibleOnPage(false);
            this.setState({
                formVisibleOnPage: false,
                selectedSurvey: null,
            });
        } else {
            setFromVisibleOnPage(!formVisibleOnPage)
        }
    }

    const handleEditingSurveyInList = async (surveyToEdit) => {
        const surveyRef = doc(db, 'surveys', surveyToEdit.id);
        await updateDoc(surveyRef, surveyToEdit);
        setEditing(false);
        setSelectedSurvey(null);
    }


    let currentlyVisibleState = null;
    let buttonText = null;
    if (error) {
        currentlyVisibleState = <p>There was an error: {error}</p>
    } else if (editing) {
        currentlyVisibleState =
            <EditSurveyForm
                surveys={selectedSurvey}
                onEditSurvey={handleEditingSurveyInList} />;
        buttonText = 'Return To Survey';
    }
    return (
        <React.Fragment>
            {currentlyVisibleState}
            {error ? null : <button onClick={handleClick}>{buttonText}</button>}
        </React.Fragment>
    )
}

export default SurveyControl;
