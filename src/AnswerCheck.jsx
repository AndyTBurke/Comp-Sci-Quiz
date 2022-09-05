import React from "react"

export default function AnswerCheck(props) {
    
    function resultsDisplay() {
        if (props.correctNumber.check) {
            return <h5>You got {props.correctNumber.currentCorrect}/5 correct</h5>
        }
    }
    
    function totalResultsDisplay() {
        if (props.correctNumber.reset > 0) {
            if (props.correctNumber.check) {
                return <h5>Total correct {props.correctNumber.totalCorrect}/{(props.correctNumber.reset + 1)*5}</h5>
            } else {
                return <h5>Total correct {props.correctNumber.totalCorrect}/{(props.correctNumber.reset)*5}</h5>    
            }
        }
    }
    
    return (
        <div>
        <button onClick={props.correctNumber.check ? props.resetHandler : props.clickHandler}
                className="check-button">
        {props.correctNumber.check ? "TRY MORE QUESTIONS" : "CHECK ANSWERS"}
        </button>
        {resultsDisplay()} {totalResultsDisplay()}
        </div>
    )
    
}