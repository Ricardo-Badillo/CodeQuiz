var questions = document.getElementById('questions');
var timer = document.getElementById('timer');
var quiz = document.getElementById('quiz');
var answer1 = document.getElementById('answer1');
var answer2 = document.getElementById('answer2');
var answer3 = document.getElementById('answer3');
var answer4 = document.getElementById('answer4');
var startButton = document.getElementById('startButton');
var highscores = document.getElementById('highscores');
var scores = document.getElementById('scores');

var secondsLeft = 60;  

var quizQuestions = [
    {
        question: 'What is 1+1?',
        optionA: '2', correct: true,
        optionB: '3', 
        optionC: '4', 
        optionD: '5', 
    },];
//     {
//         question: 'What state is Seattle in?',
//         optionA: 'Washington',
//         optionB: 'California',
//         optionC: 'Arizona',
//         optionD: 'Texas'

//     },
//     {
//         question: 'Where are the Seahawks from?',
//         optionA: 'Seattle',
//         optionB: 'New York',
//         optionC: 'Los Angeles',
//         optionD: 'Miami'
//     }
// ];






startButton.addEventListener('click', handleStartButton);

function handleStartButton(){
  console.log('Hello'); 
//questions should show up w/ answers
quiz.classList.remove("hide");
//start button should hide
startButton.classList.add("hide");
setTimer();
}



function setTimer() {
    // Sets interval in variable
    timer.classList.remove("hide");
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timer.textContent = secondsLeft;
  
      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
      }
  
    }, 1000);
  }

