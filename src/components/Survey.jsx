import React from "react";
import PropTypes from 'prop-types';


function Survey(props){
    return (
    <React.Fragment>
        <div onClick = {() => props.whenSurveyClicked(props.id)}>
            <p>{props.question1}</p>
            <p>{props.question2}</p>
            <p>{props.question3}</p>
            <p>{props.question4}</p>
            <p>{props.question5}</p>
        </div>
    </React.Fragment>
    );
}

Survey.propTypes = {
    question1: PropTypes.string,
    question2: PropTypes.string,
    question3: PropTypes.string,
    question4: PropTypes.string,
    question5: PropTypes.string,
}

export default Survey;