import React from "react";
import PropTypes from "prop-types";

function SurveyDetail(props){
    const { survey, onClickingDelete, onClickingEdit} = props;


    return (
        <div id="survey-detail">
            <h1>Survey Details!</h1>
            <h2>{props.survey.name}</h2>
            <hr />
            <p>{survey.question1}</p>
            <p>{survey.question2}</p>
            <p>{survey.question3}</p>
            <p>{survey.question4}</p>
            <p>{survey.question5}</p>
            <hr />
            <button onClick={onClickingEdit}> update Survey</button>
            <button onClick={() => onClickingDelete(survey.id)}>Delete Survey</button>
        </div>
    );
}

SurveyDetail.propTypes = {
survey: PropTypes.object,
onClickingDelete: PropTypes.func,
onClickingEdit: PropTypes.func
};

export default SurveyDetail;