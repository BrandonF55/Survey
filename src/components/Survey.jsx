import React from "react";
import PropTypes from 'prop-types';


function Survey(props){
    return (
    <div className={props.className}>
        <div onClick = {() => props.whenSurveyClicked(props.id)}>
            <p>{props.name}</p>
            <p>{props.question1}</p>
            <p>{props.question2}</p>
            <p>{props.question3}</p>
            <p>{props.question4}</p>
            <p>{props.question5}</p>
        </div>
    </div>
    );
}

Survey.propTypes = {
    name: PropTypes.string,
    question1: PropTypes.string,
    question2: PropTypes.string,
    question3: PropTypes.string,
    question4: PropTypes.string,
    question5: PropTypes.string,
}

export default Survey;