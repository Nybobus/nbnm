let RandomNumber = Math.floor(Math.random() * 100) + 1
const guessInput = document.querySelector(`#guessinput`)
const submitbtn = document.querySelector(`#SubmitBtn`)
const result = document.querySelector(`#result`)
console.log(guessInput);



SubmitBtn.addEventListener(`click`, () => {
    const userGuess = Number(guessInput.value)

    if (!userGuess || userGuess < 1 || userGuess > 100) {
        result.innerText = `Введите число от 1 до 100`
    } else if (userGuess === RandomNumber) {
        result.innerText = 'Поздравляю! Вы ишакпас!🥰'
        setTimeout(() => {
            RandomNumber = Math.floor(Math.random() * 100) + 1
            result.innerText = `загаданное число обновлено! Угадайте снова`
        }, 3000);
    } else if (userGuess < RandomNumber) {
        result.innerText = `Загаданное число больше`
    } else {
        result.innerText = `Загаданное число меньше`
    }
})