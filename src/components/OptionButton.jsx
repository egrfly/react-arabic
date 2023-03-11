import React from "react"
import Button from "./Button.jsx"
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

    return <Button className={`OptionButton ${getCorrectnessClass(optionLetter)} ${getClickabilityClass(checkingState)}`}
                   onClick={() => setSelectedLetter(optionLetter)}>{answerMode.selector(optionLetter)}</Button>
}

export default OptionButton
