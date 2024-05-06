const quizContainer = document.getElementById('quiz');
const submitButton = document.getElementById('submit');
const resultsContainer = document.getElementById('results');
const retryButton = document.getElementById('retry');


const questions = [
  {
    question: "Capitalist design during the Cold War era emphasized the values of collectivism, prioritizing the common good over individual profit.",
    answers: {
      a: "O: 맞다",
      b: "X: 아니다"
    },
    correctAnswer: "b"
  },
  {
    question: "Which design ideology during the Cold War era typically utilized vibrant, eye-catching colors such as bright red, electric blue, and hot pink to symbolize freedom, prosperity, and innovation?",
    answers: {
      a: "Communist design",
      b: "Capitalist design",
      c: "Socialist design",
      d: "Minimalist design"
    },
    correctAnswer: "b"
  },
  {
    question: "Communist films during the Cold War often celebrated the power and resilience of individualism over collectivism.",
    answers: {
      a: "O: 맞다",
      b: "X: 아니다"
    },
    correctAnswer: "b"
  },
  {
    question: "Which design movement emerged during the Cold War era in the capitalist West, embracing principles of functionalism, minimalism, and technological innovation?",
    answers: {
      a: "Art Deco movement",
      b: "Postmodern movement",
      c: "Mid-Century Modernism",
      d: "Romantic movement"
    },
    correctAnswer: "c"
  },
  {
    question: "Communist design during the Cold War era often emphasized symbols of wealth, success, and consumerism such as dollar signs and luxury items.",
    answers: {
      a: "O: 맞다",
      b: "X: 아니다"
    },
    correctAnswer: "b"
  },
  {
    question: "Which font style was commonly associated with capitalist design during the Cold War era, used for marketing, branding, and advertising purposes?",
    answers: {
      a: "Akzidenz-Grotesk",
      b: "Helvetica",
      c: "Futura Black",
      d: "DIN 1451"
    },
    correctAnswer: "b"
  },
  {
    question: "Design's political role during the Cold War was primarily to reflect existing power structures and reinforce dominant narratives.",
    answers: {
      a: "O: 맞다",
      b: "X: 아니다"
    },
    correctAnswer: "b"
  },
  {
    question: "Which design ideology during the Cold War era typically utilized muted and utilitarian colors such as slate gray, olive green, and earthy brown to match with the sober, collective ethos of the ideology?",
    answers: {
      a: "Socialist design",
      b: "Capitalist design",
      c: "Industrial design",
      d: "Postmodern design"
    },
    correctAnswer: "a"
  },
  {
    question: "In capitalist societies during the Cold War, design often served as a tool for promoting consumer culture and fostering brand loyalty.",
    answers: {
      a: "O: 맞다",
      b: "X: 아니다"
    },
    correctAnswer: "a"
  },
  {
    question: "Which influential design movement emerged during the Cold War era in the communist East, emphasizing principles of integrating art with industry within the framework of socialist realism?",
    answers: {
      a: "Soviet Constructivism",
      b: "Postmodern movement",
      c: "Mid-Century Modernism",
      d: "Art Nouveau movement"
    },
    correctAnswer: "a"
  }
];


let currentQuestion = 0;
let score = 0;

function buildQuiz() {
  const output = [];

  const currentQuestionData = questions[currentQuestion];

  output.push(
    `<div class="question">${currentQuestionData.question}</div>
    <div class="answers">${buildAnswers(currentQuestionData)}</div>`
  );

  quizContainer.innerHTML = output.join('');
}

function buildAnswers(currentQuestionData) {
  const answers = [];

  for (letter in currentQuestionData.answers) {
    answers.push(
      `<label>
        <input type="radio" name="question${currentQuestion}" value="${letter}">
        ${currentQuestionData.answers[letter]}
      </label>`
    );
  }

  return answers.join('');
}

function showResults() {
  const answerContainers = quizContainer.querySelectorAll('.answers');
  const userAnswer = quizContainer.querySelector(`input[name=question${currentQuestion}]:checked`).value;

  if (userAnswer === questions[currentQuestion].correctAnswer) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < questions.length) {
    buildQuiz();
  } else {
    showFinalResult();
  }
}


function showFinalResult() {
  quizContainer.classList.add('hidden');
  resultsContainer.classList.remove('hidden');
  resultsContainer.textContent = `You got ${score} out of ${questions.length} correct!`;
  retryButton.classList.remove('hidden'); // 퀴즈가 끝나면 retryButton을 보이도록 변경
}

function retryQuiz() {
  currentQuestion = 0;
  score = 0;
  resultsContainer.classList.add('hidden');
  quizContainer.classList.remove('hidden');
  retryButton.classList.add('hidden'); // retryButton을 다시 숨김
  buildQuiz();
}

retryButton.classList.add('hidden'); // 페이지 로드 시 retryButton을 숨김

buildQuiz();

submitButton.addEventListener('click', showResults);
retryButton.addEventListener('click', retryQuiz);
