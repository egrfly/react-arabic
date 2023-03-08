import alphabet from "../data/alphabet.js"

export function generateNextTargetLetter(previousTargetLetter) {
    let targetLetter
    do {
        targetLetter = alphabet[Math.floor(alphabet.length * Math.random())]
    } while (targetLetter === previousTargetLetter)
    return targetLetter
}

export function generateNextOptionLetters(nextTargetLetter) {
    const nextOptionLetters = [nextTargetLetter]
    let decoyOptionLetter
    while (nextOptionLetters.length < 4) {
        decoyOptionLetter = alphabet[Math.floor(alphabet.length * Math.random())]
        if (!nextOptionLetters.includes(decoyOptionLetter)) {
            nextOptionLetters.push(decoyOptionLetter)
        }
    }
    return nextOptionLetters.map(letter => ({ letter, sortingKey: Math.random() }))
        .sort((letter1, letter2) => letter1.sortingKey - letter2.sortingKey)
        .map(({ letter }) => letter)
}
