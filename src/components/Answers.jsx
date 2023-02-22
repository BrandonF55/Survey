import React from "react";
import PropTypes from "prop-types"

function Answers(props) {
  return (
    <div className="answers">
      <p key={props.answers}>{props.answers}</p>
    </div>
  )
}

Answers.propTypes = {
  answers: PropTypes.string
}

export default Answers;