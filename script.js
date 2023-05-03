
const questions = [
  {
    question: 'What does the keyword "let" do in JavaScript?',
    choices: ['Declare a block-scoped variable', 'Declare a global variable', 'Declare a function', 'Execute a loop'],
    correctAnswer: 0,
  },
  {
    question: 'Which method can be used to join two arrays?',
    choices: ['concat()', 'join()', 'splice()', 'merge()'],
    correctAnswer: 0,
  },
  {
    question: 'Which of the following is NOT a JavaScript data type?',
    choices: ['Number', 'String', 'Character', 'Object'],
    correctAnswer: 2,
  },
  {
    question: 'How do you create a function in JavaScript?',
    choices: ['function myFunction()', 'function:myFunction()', 'function = myFunction()', 'create function myFunction()'],
    correctAnswer: 0,
  },
  {
    question: 'How can you add a comment in JavaScript?',
    choices: ['<-!- This is a comment -->', '// This is a comment', '/* This is a comment */', '# This is a comment'],
    correctAnswer: 1,
  },
  {
    question: 'Which of the following is the correct syntax for a JavaScript object?',
    choices: ['{key: value}', '{key = value}', '(key: value)', '(key = value)'],
    correctAnswer: 0,
  },
  {
    question: 'How do you call a function named "myFunction" in JavaScript?',
    choices: ['call myFunction()', 'myFunction()', 'execute myFunction', 'myFunction(call)'],
    correctAnswer: 1,
  },
];

let timer;
let timeLeft = 50;
let currentQuestionIndex = 0;
let score = 0;


const startBtn = document.querySelector("#startBtn")
const timeLeftElement = document.getElementById('timer')
const cardBody = document.querySelector("#cardBody")


function showResults() {
  cardBody.innerHTML = ''

  const resultsDiv = document.createElement('div')
  resultsDiv.innerText = `Your score is: ${score}`
  cardBody.appendChild(resultsDiv);
  timeLeftElement.remove()
}

function nextQuestion(){
  cardBody.innerHTML = ''
  currentQuestionIndex += 1;
  if (currentQuestionIndex < 7) {
    makeQuestion();
  } else {
    showResults()
  }
  
}

function evalQuestion(e) {
  const correctAnswer = questions[currentQuestionIndex].correctAnswer;
if(e){
  if (e.target.id == correctAnswer){
    score += 1
  }

  nextQuestion();
}
else {
  nextQuestion()
}
}


function makeQuestion(){
  const questionDiv = document.createElement('div')
  const q = questions[currentQuestionIndex]
  questionDiv.innerHTML = `
  <p>${q.question}</p>
  <button class="qBtn" id=0>${q.choices[0]}</button>
  <button class="qBtn" id=1>${q.choices[1]}</button>
  <button class="qBtn" id=2>${q.choices[2]}</button>
  <button class="qBtn" id=3>${q.choices[3]}</button>
  `
cardBody.appendChild(questionDiv)
const btns = questionDiv.querySelectorAll(".qBtn")
for (let btn of btns) {
  
  btn.addEventListener('click', evalQuestion)
}


timer = setInterval(() => {
   timeLeft--;
    timeLeftElement.textContent = timeLeft;
   if (timeLeft <= 0) {
     clearInterval(timer);
     timeLeft = 50;
      evalQuestion();
      
     } 
    }, 1000); 
  }




startBtn.addEventListener('click', makeQuestion)