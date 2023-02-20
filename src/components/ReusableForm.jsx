import React from 'react'
import PropType from "prop-types";


function ReusableForm(props) {

    return (
        <React.Fragment>
            <form onSubmit={props.formSubmissionHandler}>
                <input type='text'
                    question1='question1'
                    placeholder="Question" />
                <input type='text'
                    question1='question2'
                    placeholder="Question" />
                <input type='text'
                    question1='question3'
                    placeholder="Question" />
                <input type='text'
                    question1='question4'
                    placeholder="Question" />
                <input type='text'
                    question1='question5'
                    placeholder="Question" />
                <button type="submit">{props.buttonText}</button>
            </form>
        </React.Fragment>
    );
}

ReusableForm.propTypes = {
        formSubmissionHandler: PropType.func,
        buttonText: PropType.string
    };


export default ReusableForm;