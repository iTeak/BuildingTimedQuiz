var startButton = document.getElementById('start-btn')
var nextButton = document.getElementById('next-btn')
var questionContainerElement = document.getElementById('question-container')
var questionElement = document.getElementById('question')
var answerButtonsElement = document.getElementById('answer-buttons')
var skipThisQuizButton = document.getElementById('sike')
var fail = document.getElementById('ready')
var timer = document.getElementById('timer')
var shuffledQuestions, currentQuestionIndex
var startingTime = .15
var time = startingTime * 60
var timerEl = document.getElementById('timer');
var seconds = (time % 60)
skipThisQuizButton.addEventListener('click',faliure)
startButton.addEventListener('click', startGame,)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})


// if {answers.correct== false)then.{startcount -  }
function startGame() { 
  countdown()
  startButton.classList.add('hide')
  skipThisQuizButton.classList.add('hide')
  fail.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
  setInterval(countdown, 1000)
function countdown() {
  var minutes = Math.floor(time/60)
  var seconds = (time % 60)
 seconds = seconds < 10 ? '0'+ seconds : seconds;
 timerEl.innerHTML = `${minutes}:${seconds}`
 time--
 if(time < 0) {
  clearInterval(timer);
  stoptimer()
  alert("Time is up!")
  timerEl.innerHTML('You failed because yo Mama')
}

}
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    var button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  var selectedButton = e.target
  var correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong') 
  }
}
function wrong(element, incorrect){
subtractTime()
}
function subtractTime(){
  var selectedButton = e.target
if(answers.correct==false){seconds -= 5;}
    ;}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

var questions = [
  {
    question: 'What does JS stand for?',
    answers: [
      { text: 'Java Script', correct: false},
      { text: 'Java Scripts', correct: false },
      { text: 'Java-Script', correct: true },
      { text: 'I give up', correct: false}
    ]
  },
  {
    question: 'who do you think you are?',
    answers: [
      { text: "I don't know ", correct: true },
      { text: "I don't know ", correct: false },
      { text: "I don't know ", correct: false },
      { text: "I don't know ", correct: false },
    ]
  },
  {
    question: 'Who are you?',
    answers: [
        { text: "Vengance ", correct: true },
        { text: "My name is Maximus..", correct: false },
        { text: "I don't know ", correct: false },
        { text: "I don't know ", correct: false },
    ]
  },
  {
    question: 'What does CSS stand for?',
    answers: [
        { text: "Cascading Style Sheet ", correct: true },
        { text: "Cascade Detergent", correct: false },
        { text: "I don't know ", correct: false },
        { text: "Cascading sheets of style ", correct: false },
    ]
  }
]

function stoptimer (){
  
}
function faliure(timer){
skipThisQuizButton.innerHTML = "Mama raised a ....faliure..."
startButton.classList.add('hide')
questionContainerElement.innerHTML = 'Faliure'
questionContainerElement.classList.remove('hide')
fail.classList.add('hide')
}
