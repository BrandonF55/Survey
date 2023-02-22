import React from "react";
import PropTypes from 'prop-types';
import ReusableForm from "./ReusableForm";

function SurveyForm(props) {
  const { survey } = props;

  function handleSurveyFormSubmit(event) {
    event.preventDefault();
    props.onNewAnswerCreation({
      surveyId: survey.id,
      answer1: event.target.answer1.value,
      answer2: event.target.answer2.value,
      answer3: event.target.answer3.value,
      answer4: event.target.answer4.value,
      answer5: event.target.answer5.value,

    });
  };



  return (
    <React.Fragment>
    <ReusableForm
    formSubmissionHandler = {handleSurveyFormSubmit}
    buttonText="Submit" />
</React.Fragment>
        
    // <div onsubmit={handleSurveyFormSubmit}>
    //   <h2>{survey.name}</h2>
    //   <form>
    //     <label>{survey.question1}</label>
    //     <input
    //       type="text"
    //       name="answer1" />
    //     <label>{survey.question2}</label>
    //     <input
    //       type="text"
    //       name="answer2" />
    //     <label>{survey.question3}</label>
    //     <input
    //       type="text"
    //       name="answer3" />
    //     <label>{survey.question4}</label>
    //     <input
    //       type="text"
    //       name="answer4" />
    //     <label>{survey.question5}</label>
    //     <input
    //       type="text"
    //       name="answer5" />
    //     <button type="submit">Submit</button>
    //   </form>
    // </div>
  );
};

SurveyForm.propTypes = {
  survey: PropTypes.object,
  onNewAnswerCreation: PropTypes.func
};

export default SurveyForm