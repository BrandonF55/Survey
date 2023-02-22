import React from "react";
import Survey from "./Survey";
import PropTypes from 'prop-types'


function SurveyList(props) {
    const surveyClassName = 'survey-style';


    return (
        <div id="survey-list">
                <h1>Survey List</h1>
                {props.surveyList.map((survey) =>
                <Survey
                    whenSurveyClicked={props.onSurveySelection}
                    name={survey.name}
                    question1={survey.question1}
                    question2={survey.question2}
                    question3={survey.question3}
                    question4={survey.question4}
                    question5={survey.question5}
                    id = {survey.id}
                    key = {survey.id}
                    className={surveyClassName}/>
                    
            )}
        </div>
    );
}





SurveyList.propType = {
    surveyList: PropTypes.array,
    onSurveySelection: PropTypes.func
};

export default SurveyList;