function calculateScore() {

    let score = 0;

    // Correct answers
    let answers = {
        q1: "Paris",
        q2: "8",
        q3: "Hyper Text Markup Language",
        q4: "CSS",
        q5: "1995"
    };

    // Loop through answers
    for (let key in answers) {
        let selected = document.querySelector(`input[name="${key}"]:checked`);
        if (selected && selected.value === answers[key]) {
            score++;
        }
    }

    let result = document.getElementById("result");

    if (score === 5) {
        result.style.color = "green";
        result.innerHTML = `Excellent  You scored ${score}/5`;
    } 
    else if (score >= 3) {
        result.style.color = "orange";
        result.innerHTML = `Good Job  You scored ${score}/5`;
    } 
    else {
        result.style.color = "red";
        result.innerHTML = `Keep Practicing  You scored ${score}/5`;
    }
}

function resetQuiz() {
    document.getElementById("quizForm").reset();
    document.getElementById("result").innerHTML = "";
}
