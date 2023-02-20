import React from "react";
import Survey from "./Survey";
import PropTypes from 'prop-types'

function SurveyList(props) {

    return (
        <React.Fragment>
            {props.ticketList.map((survey) =>
                <Survey
                    whenSurveyClicked={props.onSurveySelection}
                    question1={survey.question1}
                    question2={survey.question2}
                    question3={survey.question3}
                    question4={survey.question4}
                    question5={survey.question5} />
            )}
        </React.Fragment>
    );
}


SurveyList.PropType = {
    SurveyList: PropTypes.array,
    onSurveySelection: PropTypes.func
};
