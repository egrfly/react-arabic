import React from "react"
import Button from "./Button.jsx"
import "./ModeSelector.css"

function ModeSelector({ questionMode, answerMode, reverseQuestionAndAnswerModes, reversedQuestionAndAnswerModes }) {
    return (
        <div className="ModeSelector">
            <div className="ModeSelector__Mode">{questionMode.name}</div>
            <Button className="ModeSelector__Button" onClick={reverseQuestionAndAnswerModes}>
                <i className={`bi bi-arrow-repeat ${reversedQuestionAndAnswerModes ? "upside-down" : ""}`}></i>
            </Button>
            <div className="ModeSelector__Mode">{answerMode.name}</div>
        </div>
    )
}

export default ModeSelector
