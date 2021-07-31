var questions = document.getElementById('questions');
var quizChoices = document.getElementById("choices");
var timer = document.getElementById('timer');
var quiz = document.getElementById('quiz');

var startButton = document.getElementById('startButton');
var highscores = document.getElementById('highscores');
var scores = document.getElementById('scores');
var results = document.getElementById("result")

var secondsLeft = 60;  
var currentQuestionsI = 0;

var quizQuestions = [
    {
      question: 'Where is the JavaScript found on the html page?',
      choices: ['bottom', 'top'], 
      answer: 'bottom'
    },
    {
      question: 'A variable can be what?',
      choices: ['string', 'number', 'boolean', 'all'],
      answer: 'all'
    },
    {
      question: 'What does API stand for?',
      choices: ['All Program Index', 'Application Programming Interface', 'App Playing Interface'],
      answer: 'Application Programming Interface'
    }
  ];

startButton.addEventListener('click', handleStartButton);

function handleStartButton(){
  console.log('Hello'); 
//questions should show up w/ answers
quiz.classList.remove("hide");
//start button should hide
startButton.classList.add("hide");

questions.removeAttribute("class")

setTimer();
getquestion();
}

function getquestion(){
  var newQuestions = quizQuestions[currentQuestionsI];
  
  var question = document.getElementById("question-question");
  question.textContent = newQuestions.question;

  quizChoices.innerHTML = "";

  newQuestions.choices.forEach(function(choice, i) {

    var choiceBut = document.createElement("button");
    choiceBut.setAttribute("class", "choice");
    choiceBut.setAttribute("value", choice);

    choiceBut.textContent = i + 1 + ". " + choice;

    choiceBut.onclick = questionClick;

    quizChoices.appendChild(choiceBut);
  });
  
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

function questionClick() {
  if (this.value !== quizQuestions[currentQuestionsI].answer) {
    results.textContent = 'Wrong!';

  }else {
    results.textContent = 'Correct!';
  }

  currentQuestionsI++;
}