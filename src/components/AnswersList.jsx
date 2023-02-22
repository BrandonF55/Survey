import React from "react";
import PropTypes from "prop-types";
import Answers from "./Answers";

function AnswersList(props) {
  const { survey } = props;
  return (
    <div className="answers-list">
      <h2>{survey.name}</h2><hr/>

      <div className="question1">
        <p><strong>{survey.question1}</strong></p>
        {props.answersList.map((answers) =>
          <Answers answer={answers.answer1} />
        )}
      </div><hr/>
      <div className="question2">
        <p><strong>{survey.question2}</strong></p>
        {props.answersList.map((answers) =>
          <Answers answers={answers.answer2} />
        )}
      </div><hr/>
      <div className="question3">
        <p><strong>{survey.question3}</strong></p>
        {props.answersList.map((answers) =>
          <Answers answers={answers.answer3} />
        )}
      </div><hr/>
      <div className="question4">
        <p><strong>{survey.question4}</strong></p>
        {props.answersList.map((answers) =>
          <Answers answers={answers.answer4} />
        )}
      </div><hr/>
      <div className="question5">
        <p><strong>{survey.question5}</strong></p>
        {props.answersList.map((answers) =>
          <Answers answers={answers.answer5} />
        )}
      </div>
    </div>
  )

}

AnswersList.propTypes = {
  survey: PropTypes.object,
  answersList: PropTypes.array
}

export default AnswersList;