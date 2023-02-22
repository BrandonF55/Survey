import React from "react";
import PropTypes from "prop-types";

function SurveyDetail(props){
    const { survey, onClickingDelete, onClickingTakeSurvey, onClickingEdit, onAddingAnswers} = props;


    return (
        <div id="survey-detail">
            <h1><u>Survey Details!</u></h1>
            <h2> Survey name: {props.survey.name}</h2>
            <hr />
            <h3><strong>Name: </strong>{survey.name}</h3>
      <p><strong>Question 1: </strong>{survey.question1}</p>
      <p><strong>Question 2: </strong>{survey.question2}</p>
      <p><strong>Question 3: </strong>{survey.question3}</p>
      <p><strong>Question 4: </strong>{survey.question4}</p>
      <p><strong>Question 5: </strong>{survey.question5}</p>
            <hr />
            <button onClick={onClickingTakeSurvey}>Take This Survey</button><br /><br />
            <button onClick={onClickingEdit}> Update Survey</button><br /><br />
            <button onClick={() => onClickingDelete(survey.id)}>Delete Survey</button>
            <button onClick={() => onAddingAnswers(survey.id)}>View Answers</button>
            
        </div>
    );
}

SurveyDetail.propTypes = {
survey: PropTypes.object,
onClickingTakeSurvey: PropTypes.func,
onAddingAnswers: PropTypes.func,
onClickingDelete: PropTypes.func,
onClickingEdit: PropTypes.func
};

export default SurveyDetail;