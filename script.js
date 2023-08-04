const quizData = [
    {
      question: "Which is the capital of India?",
      a: "New Delhi",
      b: "Kolkata",
      c: "Mumbai",
      d: "Banglore",
      correct: "a",
    },
    {
      question: "How many states are there in India?",
      a: "25",
      b: "27",
      c: "23",
      d: "28",
      correct: "d",
    },
    {
      question: "Who invented Laptop?",
      a: "Adam Osborne",
      b: "Sir Humphry Davy",
      c: "Chandler",
      d: "Rachel",
      correct: "a",
    },
    {
      question: "What is the full form of IBM?",
      a: "Indian Business Management",
      b: "International Business Machines ",
      c: "International Business Management",
      d: "none of the above",
      correct: "b",
    },
  ];
  
  const quiz = document.getElementById("quiz");
  const answerElements = document.querySelectorAll(".answer");
  const questionElement = document.getElementById("question");
  const a_text = document.getElementById("a_text");
  const b_text = document.getElementById("b_text");
  const c_text = document.getElementById("c_text");
  const d_text = document.getElementById("d_text");
  const submitButton = document.getElementById("submit");
  
  let currentQuiz = 0;
  let score = 0;
  
  const deselectAnswers = () => {
    answerElements.forEach((answer) => (answer.checked = false));
  };
  
  const getSelected = () => {
    let answer;
    answerElements.forEach((answerElement) => {
      if (answerElement.checked) answer = answerElement.id;
    });
    return answer;
  };
  
  const loadQuiz = () => {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
  };
  
  loadQuiz();
  
  submitButton.addEventListener("click", () => {
    const answer = getSelected();
    if (answer) {
      if (answer === quizData[currentQuiz].correct) score++;
      currentQuiz++;
      if (currentQuiz < quizData.length) loadQuiz();
      else {
        quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                <button onclick="history.go(0)">Play Again</button>
            `;
      }
    }
  });
