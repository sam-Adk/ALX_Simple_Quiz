function checkAnswer() {
    //correct checkAnswer
    const correctAnswer = "4";

    //gets user selected checkAnswer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    const userAnswer = selectedOption ? selectedOption.value : null;

    //select feedback element

    const feedback = document.getElementById("feedback");

    //compare user answer with correct answer

    if (userAnswer === correctAnswer) {
        feedback.textContent = "correct! well done.";
    }else{
        feedback.textContent = "Thats incorrect. Try again!";
    }
}

//Add event listener to te button

document.getElementById("submit-answer").addEventListener("click",checkAnswer);