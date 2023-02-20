import React from "react";
import PropTypes from "prop-types";

function SurveyDetail(props){
    const { survey, onClickingDelete, onClickingEdit} = props;


    return (
        <React.Fragment>
            <h1>Survey Details</h1>
            <p>{survey.question1}</p><br/>
            <p>{survey.question2}</p><br/>
            <p>{survey.question3}</p><br/>
            <p>{survey.question4}</p><br/>
            <p>{survey.question5}</p>
            <button onClick={onClickingEdit}> update Survey</button>
            <button onClick={onClickingDelete}>Delete Survey</button>
        </React.Fragment>
    );
}

SurveyDetail.propTypes = {
survey: PropTypes.object,
onClickingDelete: PropTypes.func,
onClickingEdit: PropTypes.func
};

export default SurveyDetail;