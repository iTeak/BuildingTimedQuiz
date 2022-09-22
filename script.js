var startButton = document.getElementById('startButton')

var formWrap = document.getElementById('question')

var Nextbutton = document.getElementById('question')

var choice1 = document.getElementsByClassName ('choice1')
var choice2 = document.getElementsByClassName ('choice2')
var choice3 = document.getElementsByClassName ('choice3')
var choice4 = document.getElementsByClassName ('choice4')

// var timer = document.getElementById('timer')


//Event listner during the end 
// Funtion declartion 
// 


startButton.addEventListener ('click' , startGame)
Nextbutton.addEventListener ('click' , populatequestion)

var question = [{ 
    question: "What does HTML standy for?",
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
        {text: 'Hyper Text Mark up Language', correct: true},
        {text:'Java Script', correct: false},
        {text: "You don't know,just give up", correct: false},
        {text: "Style sheets", correct: false},
    ] 
}]


function startGame() 
{ 

}

function populatequestion(){
document.getElementById("title").innerHTML("")
document.getElementById('question').innerHTML(question[0])
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
