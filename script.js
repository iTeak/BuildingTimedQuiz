var startButton = document.getElementById('startButton')
var NextButton = document.getElementById('NextButton')
// var choice1 = document.getElementsByClassName ('choice1')
// var choice2 = document.getElementsByClassName ('choice2')
// var choice3 = document.getElementsByClassName ('choice3')
// var choice4 = document.getElementsByClassName ('choice4')
var choicesEl = document.getElementById('choices')
var questionEl = document.getElementById('questions')
var showQuestion = document.getElementById('question')
var showChoices = document.getElementById('choices')
var sikeButton = document.getElementById('sike')
let shuffledQuestions, currentQuestionsIndex
currentQuestionsIndex=0
//Event listner during the end 
// Funtion declartion 
// 


startButton.addEventListener('click' , startGame)
NextButton.addEventListener('click' , populatequestion)
sikeButton.addEventListener('click', youthought )
choicesEl.addEventListener('click', selectAnswer)

var questions = [
    {
    question: "What does HTML standy for?",
    answers: [
        {text:'Hyper Text Mark up Language'},
        {text:'Java Script'},
        {text: "You don't know,just give up"},
        {text: "Style sheets"},
    ],
    answer:'Hyper Text Mark up Language',
},
{ 
    question: "What does CSS Stand for?",
    answers: [
        {text: 'Hyper Text Mark up Language'},
        {text: 'Java Script'},
        {text: "You don't know,just give up"},
        {text: 'Style sheets'},
    ],
    answer:'Style sheets',
},
{ 
    question: "What does JS stand for",
    answers: [
        {text: 'Hyper Text Mark up Language'},
        {text:'Java Script'},
        {text: "You don't know,just give up"},
        {text: "Style sheets"},
    ],
    answer:'Java Script',
},
];


function startGame(click) 
{document.getElementById("title").innerHTML=""
startButton.classList.add('hide');
NextButton.classList.remove('hide')
showChoices.classList.remove('hide')
showQuestion.classList.remove('hide')
sikeButton.classList.add('hide')
document.getElementById('question').innerHTML= (questions[0].question);
document.getElementById('choice1').innerHTML=(questions[0].answers[0].text);
document.getElementById('choice2').innerHTML=(questions[0].answers[1].text);
document.getElementById('choice3').innerHTML=(questions[0].answers[2].text);
document.getElementById('choice4').innerHTML=(questions[0].answers[3].text);

}


function populatequestion(){
    shuffledQuestions = questions.sort(()=> Math.random() - .5)
    currentQuestionsIndex=0
    document.getElementById('question').innerHTML= (questions[0].question);
    document.getElementById('question').innerHTML= (questions[1].question);
    document.getElementById('question').innerHTML= (questions[2].question);
   

   




//title will disappear 
//question in <h2> will populate to an actual question 
// choices will change in choice1, choice 2, choice 3, choice 4 
//when I hit start/next then the question from the array of questions will poopulate in order 

}



// function clickQuestion(e) {
//     var buttonElement = e.target

//     // check if user is right or wrong
//     if (buttonElement.value !== questions[currentQuestionIndex].answer) {
//         timer -= 10;

//         if (timer < 0) {
//             timer = 0
//         }
//             // displays score
//         timerEl.textContent = timer

        
//     }

// }

function selectAnswer(e){
  choicesEl = e.target
  console.log(choicesEl.innerHTM)
  console.log(currentQuestionsIndex)
  if (choicesEl == questions[currentQuestionsIndex].answer) 
    console.log("correct");

    if (timer < 0) {
        const newLocal = timer = 0
    
        // displays scored
    timerEl.textContent = timer

  
}
   
    
    // var answerselected = document.querySelectorAll('input')
    // for(var i= 0; i< answerselected.length; i++) {
    //     if(answerselected[i].checked == true &&
    //     answerselected[i].value === questions[3].correctanswer){}
    // }
    //write a variable for keeping score, 
    //for each correct answer 
    //grab value form the selected button 
    //check thus value 
    //know the question
}
// function timer( ){
// }

function score (){
    //answer is correct add 1 

}

function youthought(){
    alert("...")
}

// startQuiz
    // hide home page 
    // timer = setInterval(clock,  1000)
    // display time on page. timerEl.textContent = timer
    // getQuestion()

// getQuestion
    // current question variable is assigned by the questions array
