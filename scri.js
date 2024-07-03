// Define the quiz questions and answers as an array of objects
const quizQuestions = [
  {
    question: "What is the capital of France?",
    answers: ["Paris", "London", "Berlin", "Rome"],
    correctAnswer: 0
  },
  {
    question: "What is the largest planet in our solar system?",
    answers: ["Earth", "Saturn", "Jupiter", "Uranus"],
    correctAnswer: 2
  },
  {
    question: "What is the smallest country in the world?",
    answers: ["Vatican City", "Monaco", "Nauru", "Tuvalu"],
    correctAnswer: 0
  }
  // Add more questions to the array as needed
];

// Function to load the quiz questions dynamically
function loadQuizQuestions() {
  const quizContainer = document.getElementById("quiz-container");
  quizContainer.innerHTML = ""; // Clear the container

  quizQuestions.forEach((question, index) => {
    const questionElement = document.createElement("div");
    questionElement.className = "quiz-question";

    const questionText = document.createElement("p");
    questionText.textContent = question.question;
    questionElement.appendChild(questionText);

    const answerOptions = document.createElement("ul");
    question.answers.forEach((answer, answerIndex) => {
      const answerOption = document.createElement("li");
      answerOption.textContent = answer;
      answerOption.dataset.answerIndex = answerIndex;
      answerOptions.appendChild(answerOption);
    });
    questionElement.appendChild(answerOptions);

    quizContainer.appendChild(questionElement);
  });
}

// Call the function to load the quiz questions
loadQuizQuestions();
