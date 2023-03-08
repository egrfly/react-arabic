import React from "react"

function ModeSelector({ questionMode, answerMode, reverseQuestionAndAnswerModes, reversedQuestionAndAnswerModes }) {
    return (
        <div className="ModeSelector">
            <div>{questionMode.name}</div>
            <button onClick={reverseQuestionAndAnswerModes}>
                <i className={`bi bi-arrow-repeat ${reversedQuestionAndAnswerModes ? "upside-down" : ""}`}></i>
            </button>
            <div>{answerMode.name}</div>
        </div>
    )
}

export default ModeSelector
