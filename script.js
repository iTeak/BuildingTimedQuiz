var startButton = document.getElementById('startButton')
var formWrap = document.getElementById('question')
var NextButton = document.getElementById('NextButton')

var choice1 = document.getElementsByClassName ('choice1')
var choice2 = document.getElementsByClassName ('choice2')
var choice3 = document.getElementsByClassName ('choice3')
var choice4 = document.getElementsByClassName ('choice4')

// var timer = document.getElementById('timer')


//Event listner during the end 
// Funtion declartion 
// 


startButton.addEventListener('click' , startGame)
NextButton.addEventListener('click' , populatequestion)
 

const questions = [{ 
    question1: "What does HTML standy for?",
    answers: [
        {text: 'Hyper Text Mark up Language', correct: true},
        {text:'Java Script', correct: false},
        {text: "You don't know,just give up", correct: false},
        {text: "Style sheets", correct: false},
    ] 
},
{ 
    question: "What does CSS Stand for?",
    answers: [
        {text: 'Hyper Text Mark up Language', correct: true},
        {text:'Java Script', correct: false},
        {text: "You don't know,just give up", correct: false},
        {text: "Style sheets", correct: false},
    ] 
},
{ 
    question: "What does JS stand for",
    answers: [
        {text: 'Hyper Text Mark up Language', correct: false},
        {text:'Java Script', correct: true},
        {text: "You don't know,just give up", correct: false},
        {text: "Style sheets", correct: false},
    ] 
}]


function startGame() 
{ document.getElementById("title").innerHTML=""
startButton.classList.add('hide');
NextButton.classList.remove('hide')

  
}

function populatequestion(){
    console.log("working")
document.getElementById('question').innerHTML= (questions[0].question1)
document.getElementsByClassName('choice1').innerHTML=(questions[0].answers[0])




//title will disappear 
//question in <h2> will populate to an actual question 
// choices will change in choice1, choice 2, choice 3, choice 4 
//when I hit start/next then the question from the array of questions will poopulate in order 

}







function selectAnswer(){

}
// function timer( ){
// }

function setNextQuestion(){

}
