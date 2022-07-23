const quizData = [
  {
    question: "How old is Mirzoyoqub?",
    a: "16",
    b: "18",
    c: "19",
    d: "20",
    correct: "b",
  },
  {
    question: "What is the most used programming language in 2022?",
    a: "JavaScript",
    b: "Python",
    c: "C++",
    d: "Java",
    correct: "d",
  },
  {
    question: "What is your favourite sport",
    a: "Football",
    b: "Basketball",
    c: "Tennis",
    d: "Swimming",
    correct: "a",
  },
  {
    question: "How much friends do you have",
    a: "2",
    b: "4",
    c: "10",
    d: "I dont have friends",
    correct: "c",
  },
];
const answerELS = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswer();
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;
  answerELS.forEach((answerEL) => {
    if (answerEL.checked) {
      answer = answerEL.id;
    }
  });
  return answer;
}
function deselectAnswer() {
  answerELS.forEach((answerEL) => {
    answerEL.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  //checked to see the answer
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2>You answered correctly at ${score}/ ${quizData.length} questions. </h2>
       <button onclick="location.reload()">Reload</button>`;
    }
  }
});
