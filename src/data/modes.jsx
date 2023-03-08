import Arabic from "../components/Arabic.jsx"

const modes = [
    {
        name: "Letter names",
        selector: (letter) => letter.name,
    },
    {
        name: "Letter symbols",
        selector: (letter) => <Arabic>{letter.symbol}</Arabic>,
    },
]

export default modes
