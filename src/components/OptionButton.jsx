import React from "react"
import "./OptionButton.css"

function OptionButton({ optionLetter, targetLetter, selectedLetter, setSelectedLetter, answerMode, checkingState }) {
    function getCorrectnessClass(letter) {
        if (checkingState && letter === targetLetter) {
            return "OptionButton--correct"
        } else if (checkingState && letter === selectedLetter) {
            return "OptionButton--incorrect"
        } else if (letter === selectedLetter) {
            return "OptionButton--selected"
        } else {
            return ""
        }
    }

    function getClickabilityClass(checkingState) {
        if (checkingState) {
            return "OptionButton--unclickable"
        } else {
            return ""
        }
    }

    return <button className={`OptionButton ${getCorrectnessClass(optionLetter)} ${getClickabilityClass(checkingState)} w-100 p-3 fs-5`}
                   onClick={() => setSelectedLetter(optionLetter)}>{answerMode.selector(optionLetter)}</button>
}

export default OptionButton
