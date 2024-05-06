const quizContainer = document.getElementById('quiz');
const submitButton = document.getElementById('submit');
const resultsContainer = document.getElementById('results');



const questions = [
  {
    question: "1. Capitalist design during the Cold War era emphasized the values of collectivism, prioritizing the common good over individual profit.",
    answers: {
      a: "O",
      b: "X"
    },
    correctAnswer: "b"
  },
  {
    question: "2. Which design ideology during the Cold War era typically utilized vibrant, eye-catching colors such as bright red, electric blue, and hot pink to symbolize freedom, prosperity, and innovation?",
    answers: {
      a: "Communist design",
      b: "Capitalist design",
      c: "Socialist design",
      d: "Minimalist design"
    },
    correctAnswer: "b"
  },
  {
    question: "3. Communist films during the Cold War often celebrated the power and resilience of individualism over collectivism.",
    answers: {
        a: "O",
        b: "X"
      },
    correctAnswer: "b"
  },
  {
    question: "4. Which design movement emerged during the Cold War era in the capitalist West, embracing principles of functionalism, minimalism, and technological innovation?",
    answers: {
      a: "Art Deco movement",
      b: "Postmodern movement",
      c: "Mid-Century Modernism",
      d: "Romantic movement"
    },
    correctAnswer: "c"
  },
  {
    question: "5. Communist design during the Cold War era often emphasized symbols of wealth, success, and consumerism such as dollar signs and luxury items.",
    answers: {
        a: "O",
        b: "X"
    },
    correctAnswer: "b"
  },
  {
    question: "6. Which font style was commonly associated with capitalist design during the Cold War era, used for marketing, branding, and advertising purposes?",
    answers: {
      a: "Akzidenz-Grotesk",
      b: "Helvetica",
      c: "Futura Black",
      d: "DIN 1451"
    },
    correctAnswer: "b"
  },
  {
    question: "7. Design's political role during the Cold War was primarily to reflect existing power structures and reinforce dominant narratives.",
    answers: {
        a: "O",
        b: "X"
    },
    correctAnswer: "b"
  },
  {
    question: "8. Which design ideology during the Cold War era typically utilized muted and utilitarian colors such as slate gray, olive green, and earthy brown to match with the sober, collective ethos of the ideology?",
    answers: {
      a: "Socialist design",
      b: "Capitalist design",
      c: "Industrial design",
      d: "Postmodern design"
    },
    correctAnswer: "a"
  },
  {
    question: "9. In capitalist societies during the Cold War, design often served as a tool for promoting consumer culture and fostering brand loyalty.",
    answers: {
        a: "O",
        b: "X"
    },
    correctAnswer: "a"
  },
  {
    question: "10. Which influential design movement emerged during the Cold War era in the communist East, emphasizing principles of integrating art with industry within the framework of socialist realism?",
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
    // Add a class "quiz-question" for styling the question
    output.push(
      `<div class="quiz-question">${currentQuestionData.question}</div>
       <div class="quiz-answers">${buildAnswers(currentQuestionData)}</div>`
    );
    quizContainer.innerHTML = output.join('');
  }
  
  function buildAnswers(currentQuestionData) {
    const answers = [];
    // Loop through each answer and add a class "quiz-answer" for styling
    for (const letter in currentQuestionData.answers) {
      answers.push(
        `<label class="quiz-answer">
           <input type="radio" name="question${currentQuestion}" value="${letter}">
           ${letter}: ${currentQuestionData.answers[letter]}
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

}


buildQuiz();

submitButton.addEventListener('click', showResults);

function showFinalResult() {
    const quizContainer = document.getElementById('quiz');
    const submitButton = document.getElementById('submit');
    const resultsContainer = document.getElementById('results');
    
    // Hide the quiz questions and submit button
    quizContainer.style.display = 'none';
    submitButton.style.display = 'none';
    
    // Show the results container and update its contents
    resultsContainer.classList.remove('hidden');
    resultsContainer.textContent = `You got ${score} out of ${questions.length} correct!`;
    resultsContainer.style.textAlign = 'center'; // Center the text
  }
  