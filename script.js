// Global Variables //
var startBtn = document.getElementById("start")
var nextBtn = document.getElementById("next")
var result = document.getElementById("result")
var highScore = document.getElementById("highScores")
var timer = document.getElementById('timer')
var quizQ = document.getElementById("quizQ")
var ansA = document.getElementById('answerBtn1')
var ansB = document.getElementById('answerBtn2')
var ansC = document.getElementById('answerBtn3')
var ansD = document.getElementById('answerBtn4')
var hideOptions = document.querySelectorAll('.ansBtn')
var pageSelect = document.querySelector("section")
var highScoreTotal = 0
var secondsLeft = 5;
var nameInput = document.getElementById("nameInput")
var savedScores = document.getElementById('savedScores')
var submitBtn = document.getElementById('submit')

highScore.addEventListener('click', displayHighScores)
startBtn.addEventListener('click', startQuiz)

// Timer Start //
function setTime() {
    var secondsLeft = 10;
    // Sets interval in variable
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timer.textContent = secondsLeft + " seconds left";

        if (secondsLeft === 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            // Calls function to create and append image
            displayHighScores()
        }

    }, 1000);
}

// Enables answer buttons//
function enableBtn() {
    hideOptions.forEach(function (hideOption) {
        hideOption.removeAttribute("disabled")
    })
}

// Disables answer buttons//
function disableBtn() {
    hideOptions.forEach(function (hideOption) {
        hideOption.setAttribute("disabled", true)
    })
}

// Starts quiz by showing block with question and answer choices for Question 1//
function startQuiz() {
    startBtn.style.display = "none"
    nextBtn.style.display = "block"
    quizBtns.style.display = "block"
    result.style.display = "block"
    displayQuestion1()
}

// Starts timer for quiz and displays question and choices for question 1, answer buttons are disabled after answer choice or timer runs out. Next btn triggers next question//
function displayQuestion1() {
    setTime();
    quizQ.textContent = "What does 'www' stand for in a website browser?"
    ansA.textContent = "Watchful World Wrestling"
    ansB.textContent = "Wacky Warm Wildflower"
    ansC.textContent = "World Wide Web"
    ansD.textContent = "Wealthy Wild Wordsmiths"
    ansA.onclick = function () {
        result.textContent = "Incorrect"
        disableBtn()
    }
    ansB.onclick = function () {
        result.textContent = "Incorrect"
        disableBtn()
    }
    ansC.onclick = function () {
        result.textContent = "Correct +10 pts"
        disableBtn()
        highScoreTotal += 10;
    }
    ansD.onclick = function () {
        result.textContent = "Incorrect"
        disableBtn()
    }
    nextBtn.addEventListener('click', displayQuestion2)
}

// Displays question and choices for question 2, answer buttons are disabled after answer choice or timer runs out. Next btn triggers next question//
function displayQuestion2() {
    enableBtn()
    quizQ.textContent = "What is the name of the largest ocean on Earth?"
    ansA.textContent = "Atlantic"
    ansB.textContent = "Pacific"
    ansC.textContent = "Indian"
    ansD.textContent = "Arctic"
    ansA.onclick = function () {
        result.textContent = "Incorrect"
        disableBtn()
    }
    ansB.onclick = function () {
        result.textContent = "Correct +10pts"
        disableBtn()
        highScoreTotal += 10;
    }
    ansC.onclick = function () {
        result.textContent = "Incorrect"
        disableBtn()
    }
    ansD.onclick = function () {
        result.textContent = "Incorrect"
        disableBtn()
    }
    nextBtn.addEventListener('click', displayQuestion3)
}

// Displays question and choices for question 3, answer buttons are disabled after answer choice or timer runs out. Next btn triggers next question//
function displayQuestion3() {
    enableBtn()
    quizQ.textContent = "How many hearts does an octopus have?"
    ansA.textContent = "1"
    ansB.textContent = "2"
    ansC.textContent = "3"
    ansD.textContent = "4"
    ansA.onclick = function () {
        result.textContent = "Incorrect"
        disableBtn()
    }
    ansB.onclick = function () {
        result.textContent = "Incorrect"
        disableBtn()
    }
    ansC.onclick = function () {
        result.textContent = "Correct +10pts"
        disableBtn()
        highScoreTotal += 10;
    }
    ansD.onclick = function () {
        result.textContent = "Incorrect"
        disableBtn()
    }
    nextBtn.addEventListener('click', displayQuestion4)
}

// Displays question and choices for question 4, answer buttons are disabled after answer choice or timer runs out. Next btn triggers next question//
function displayQuestion4() {
    enableBtn()
    quizQ.textContent = "What is the hottest planet in the solar  system?"
    ansA.textContent = "Mercury"
    ansB.textContent = "Pluto"
    ansC.textContent = "Mars"
    ansD.textContent = "Venus"
    ansA.onclick = function () {
        result.textContent = "Incorrect"
        disableBtn()
    }
    ansB.onclick = function () {
        result.textContent = "Incorrect"
        disableBtn()
    }
    ansC.onclick = function () {
        result.textContent = "Incorrect"
        disableBtn()
    }
    ansD.onclick = function () {
        result.textContent = "Correct +10pts"
        disableBtn()
        highScoreTotal += 10;
    }
    nextBtn.addEventListener('click', displayQuestion5)
}

// Displays question and choices for question 5, answer buttons are disabled after answer choice or timer runs out. Next btn triggers highscore list//
function displayQuestion5() {
    enableBtn()
    quizQ.textContent = "Sodium bicarbonate is a staple in most kitchens. What is its other name?"
    ansA.textContent = "Vinegar"
    ansB.textContent = "Baking Soda"
    ansC.textContent = "Sugar"
    ansD.textContent = "Salt"
    ansA.onclick = function () {
        result.textContent = "Incorrect"
        disableBtn()
    }
    ansB.onclick = function () {
        result.textContent = "Correct +10pts"
        disableBtn()
        highScoreTotal += 10;
    }
    ansC.onclick = function () {
        result.textContent = "Incorrect"
        disableBtn()
    }
    ansD.onclick = function () {
        result.textContent = "Incorrect"
        disableBtn()
    }
    nextBtn.addEventListener('click', displayHighScores)
}

// Highscore list function disappears quiz content and displays highscore list and highscore list input//
function displayHighScores() {
    pageSelect.style.display = "none"
    document.getElementById('highScoreBoard').style.display = "block";
    document.getElementById('yourScore').textContent = "Your Score: " + highScoreTotal;
}

var scores = [];

// Renders user input and adds to highscore list//
function renderScores() {
  savedScores.innerHTML = "";

  for (var i = 0; i < scores.length; i++) {
    var score = scores[i];

    var li = document.createElement("li");
    li.textContent = score;
    li.setAttribute("data-index", i);

    savedScores.appendChild(li);
  }
}

// Adds previously saved scores to highscore list//
function init() {
  var storedScores = JSON.parse(localStorage.getItem("scores"));

  if (storedScores !== null) {
    scores = storedScores;
  }

  renderScores();
}

// Stores name and score input//
function storeScore() {
  localStorage.setItem("scores", JSON.stringify(scores));
}

// Submit button triggers adding name input and pushes score and name to  local storage//
submitBtn.addEventListener("click", function(event) {
  event.preventDefault();

  var nameText = nameInput.value.trim();

  if (nameText === "") {
    return;
  }
  scores.push(highScoreTotal);
  scores.push(nameText);
  nameInput.value = "";

  storeScore();
  renderScores();
});

init()

