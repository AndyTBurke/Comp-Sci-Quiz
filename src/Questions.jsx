import React from "react"
import he from "he"

export default function Questions(props) {
    
    function buttonColor(index) {
        if (props.chosenAns == props.randAnswers[index]) {
            if (props.check && props.chosenAns != props.correctAns) {
            return {background: "#f29ba7", borderColor: "red"}
            } else if (props.check && props.chosenAns == props.correctAns) {
            return {background: "#7bc983", borderColor: "#FFD700"}
            } else {
            return {background: "lightblue", borderColor: "#034a16"}
            }
        }
        if (props.check && props.randAnswers[index] == props.correctAns) {
            return {background: "#c8f7c6"}
        }
    }
    
    return (
        <div>
            <div className="question-container">
                <h3>{he.decode(props.quest)}</h3>
            </div>
            <div className="button-container">
                <button 
                    onClick={props.check ? null : props.chooseAnswer} 
                    value={props.randAnswers[0]}
                    id={props.id}
                    style={buttonColor(0)}>
                {he.decode(props.randAnswers[0])}
                </button>
                <button 
                    onClick={props.check ? null : props.chooseAnswer} 
                    value={props.randAnswers[1]}
                    id={props.id}
                    style={buttonColor(1)}>
                {he.decode(props.randAnswers[1])}
                </button>
                <button 
                    onClick={props.check ? null : props.chooseAnswer} 
                    value={props.randAnswers[2]}
                    id={props.id}
                    style={buttonColor(2)}>
                {he.decode(props.randAnswers[2])}
                </button>
                <button 
                    onClick={props.check ? null : props.chooseAnswer} 
                    value={props.randAnswers[3]}
                    id={props.id}
                    style={buttonColor(3)}>
                {he.decode(props.randAnswers[3])}
                </button>
            </div>
            <hr />
        </div>
    )
}