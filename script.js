var startButton = document.getElementById('start-btn')
var nextButton = document.getElementById('next-btn')
var questionContainerElement = document.getElementById('question-container')
var questionElement = document.getElementById('question')
var answerButtonsElement = document.getElementById('answer-buttons')
var skipThisQuizButton = document.getElementById('sike')
var fail = document.getElementById('ready')
var timer = document.getElementById('timer')
var shuffledQuestions, currentQuestionIndex
var startingTime = 10
var time = startingTime * 60
var timerEl = document.getElementById('timer');
var seconds = (time % 60)
var saveButton = document.getElementById('save-btn')
var endgame = document.getElementById('endgame')

answerButtonsElement.addEventListener("click",subtractTime)
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
  var timerInter = setInterval(countdown, 1000)
  function countdown() {
    var minutes = Math.floor(time/60)
    var seconds = (time % 60)
   seconds = seconds < 10 ? '0'+ seconds : seconds;
   timerEl.innerHTML = `${minutes}:${seconds}`
   //timerEl.innerHTML = `${time}`
   time--
   if(time < 0) {
    clearInterval(timerInter);
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
      button.dataset.correct = true
    }else{button.dataset.correct= false}
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
  var point = 10
  console.log(e.target)
  var correct = selectedButton.dataset.correct
  console.log(correct)
  if(correct === "false"){
    time = time - 100;
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })}
  if (correct = true){points()
  console.log(point)
  }
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
    saveButton.classList.remove('hide')
    questionContainerElement.classList.add('hide')
    endgame.classList.remove('hide')
    timerEl.classList.add('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } 
   else {
    element.classList.add('wrong') 
  }
}
// function wrong(element, incorrect){
// subtractTime()
// }


function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

var questions = [
  {
    question: 'What does JS stand for?',
    answers: [
      { text: 'Java Scripting', correct: false},
      { text: 'Java Scripts', correct: false },
      { text: 'Java Script', correct: true },
      { text: 'I give up', correct: false}
    ]
  },
  {
    question: 'what does Java Script do?',
    answers: [
      { text: "Makes the website interactive", correct: true },
      { text: "Skeleton of webpage ", correct: false },
      { text: "A french way of making coffee", correct: false },
      { text: "Java Script ", correct: false },
    ]
  },
  {
    question: 'What are JavaScript Data Types?',
    answers: [
        { text: "Boolean, Numbers, string ", correct: true },
        { text: "My name is Maximus..", correct: false },
        { text: "I don't know ", correct: false },
        { text: "I don't know ", correct: false },
    ]
  },
  {
    question: 'What would following code return?  console.log(typeof typeof 1);',
    answers: [
        { text: "Cascading Style Sheet ", correct: true },
        { text: "Cascade Detergent", correct: false },
        { text: "I don't know ", correct: false },
        { text: "Cascading sheets of style ", correct: false },
    ]
  }

]
function faliure(){
skipThisQuizButton.innerHTML = "Mama raised a little..."
startButton.classList.add('hide')
questionContainerElement.innerHTML = 'Faliure'
questionContainerElement.classList.remove('hide')
fail.classList.add('hide')
timerEl.classList.add('hide')
}

function subtractTime(element){
if(element.classList = ("wrong")){seconds-5} ;}

function points(){
  
}
function saveuser(){
  localStorage.setItem ('value', input.value)
  usernamesave.innerHTML = localStorage.getItem("value")
  username.innerHTML = usernamesave.value
}
var usernamesave = document.getElementById('saveusername')
var username = document.getElementsByid("username")