import React from 'react'
import PropType from "prop-types";


function ReusableForm(props) {

    return (
        <React.Fragment>
            <form onSubmit={props.formSubmissionHandler}>
                <input type="text"
                name="name"
                placeholder="Survey Name" />
                <br/>
                <input type='text'
                    name='question1'
                    placeholder="Question one" />
                    <br/>
                <input type='text'
                    name='question2'
                    placeholder="Question two" />
                    <br/>
                <input type='text'
                    name='question3'
                    placeholder="Question three" />
                    <br/>
                <input type='text'
                    name='question4'
                    placeholder="Question four" />
                    <br/>
                <input type='text'
                    name='question5'
                    placeholder="Question five" />
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