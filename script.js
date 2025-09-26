const quizData = [
  {
    question: "1. What does AI stand for?",
    options: ["Artificial Integration", "Automated Intelligence", "Artificial Intelligence", "Advanced Interaction"],
    answer: "Artificial Intelligence"
  },
  {
    question: "2. Who is considered the father of Artificial Intelligence?",
    options: ["Alan Turing", "John McCarthy", "Elon Musk", "Geoffrey Hinton"],
    answer: "John McCarthy"
  },
  {
    question: "3. Which of the following is a branch of AI?",
    options: ["Machine Learning", "Civil Engineering", "Accounting", "Medicine"],
    answer: "Machine Learning"
  },
  {
    question: "4. Which programming language is most popular for AI?",
    options: ["Python", "C", "HTML", "CSS"],
    answer: "Python"
  },
  {
    question: "5. Which AI application is used in self-driving cars?",
    options: ["Computer Vision", "Spreadsheet", "Web Design", "Accounting"],
    answer: "Computer Vision"
  },
  {
    question: "6. Which company developed AlphaGo?",
    options: ["OpenAI", "DeepMind", "IBM", "Google"],
    answer: "DeepMind"
  },
  {
    question: "7. Which AI assistant is developed by Amazon?",
    options: ["Siri", "Cortana", "Alexa", "Google Assistant"],
    answer: "Alexa"
  },
  {
    question: "8. What does NLP stand for in AI?",
    options: ["Natural Learning Program", "Neural Language Processing", "Natural Language Processing", "Numeric Logic Processing"],
    answer: "Natural Language Processing"
  },
  {
    question: "9. Which of the following is an AI chatbot?",
    options: ["Photoshop", "ChatGPT", "MS Excel", "YouTube"],
    answer: "ChatGPT"
  },
  {
    question: "10. Which test is used to check a machine's intelligence?",
    options: ["IQ Test", "Turing Test", "Driving Test", "Memory Test"],
    answer: "Turing Test"
  }
];

let currentQuestion = 0;
let score = 0;
let userName = "";
let regNo = "";

function startQuiz() {
  userName = document.getElementById("name").value.trim();
  regNo = document.getElementById("regNo").value.trim();

  if (userName === "" || regNo === "") {
    alert("Please enter both Name and Register Number!");
    return;
  }

  document.getElementById("user-form").classList.add("hidden");
  document.getElementById("quiz").classList.remove("hidden");

  loadQuestion();
}

function loadQuestion() {
  const q = quizData[currentQuestion];
  document.getElementById("question").textContent = q.question;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.onclick = () => checkAnswer(option);
    optionsDiv.appendChild(btn);
  });
}

function checkAnswer(selected) {
  if (selected === quizData[currentQuestion].answer) {
    score++;
  }
  nextQuestion();
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("quiz").classList.add("hidden");
  document.getElementById("result").classList.remove("hidden");

  document.getElementById("user-info").textContent =
    `Name: ${userName}, Register Number: ${regNo}`;
  document.getElementById("score").textContent =
    `Your Score: ${score} / ${quizData.length}`;
}
