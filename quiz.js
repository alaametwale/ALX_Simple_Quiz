function checkAnswer() {
    const correctAnswer = "a";

    const selectedOption = document.querySelector('input[name="answer"]:checked');

    if (!selectedOption) {
        document.getElementById("feedback").innerText = "Please select an answer!";
        return;
    }

    const userAnswer = selectedOption.value;

    if (userAnswer === correctAnswer) {
        document.getElementById("feedback").innerText = "Correct! 🎉";
        document.getElementById("feedback").style.color = "green";
    } else {
        document.getElementById("feedback").innerText = "Incorrect ❌ Try again!";
        document.getElementById("feedback").style.color = "red";
    }
}

document
    .getElementById("submit-answer")
    .addEventListener("click", checkAnswer);
