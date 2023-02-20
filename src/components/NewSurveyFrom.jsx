import React from "react";
import PropType from 'prop-types'
import ReusableForm from "./ReusableForm";

function newSurveyForm(props){
    
    function handleNewSurveyFormSubmission(event) {
        event.preventDefault();
        props.onNewSurveyCreation({
            question1:event.target.question1.value,
            question2:event.target.question2.value,
            question3:event.target.question3.value,
            question4:event.target.question4.value,
            question5:event.target.question5.value,
        })
    }
    return(
        <React.Fragment>
            <ReusableForm
            formSubmissionHandler={{handleNewSurveyFormSubmission}}
            buttonText="Add Survey" />
        </React.Fragment>
    );
}

newSurveyForm.propTypes = {
    onNewSurveyCreation: PropType.func
};

export default newSurveyForm;
