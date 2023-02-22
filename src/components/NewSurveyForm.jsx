import React from "react";
import PropType from 'prop-types'
import ReusableForm from "./ReusableForm";

function NewSurveyForm(props){
    
    function handleNewSurveyFormSubmission(event) {
        event.preventDefault();
        props.onNewSurveyCreation({
            name: event.target.name.value,
            question1: event.target.question1.value,
            question2: event.target.question2.value,
            question3: event.target.question3.value,
            question4: event.target.question4.value,
            question5: event.target.question4.value,
        })
    }
    return(
        <React.Fragment>
            <ReusableForm
            formSubmissionHandler = {handleNewSurveyFormSubmission}
            buttonText="Add Survey" />
        </React.Fragment>
    );
}

NewSurveyForm.propTypes = {
    onNewSurveyCreation: PropType.func
};

export default NewSurveyForm;
