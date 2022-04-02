var highscoreBtn = document.querySelector("#highScores")
var quizTitle = document.querySelector("#quizTitle")
var timerText = document.querySelector("#timer")
var quizContent = document.querySelector("#quizContent")
var startBtn = document.querySelector("#start")
var results = document.querySelector("#result")
var quizQuestions = [
    {
      question: "What does 'www' stand for in a website browser?",
      answers: {
          a: 'Watchful World Wrestling',
          b: 'Wacky Warm Wildflower',
          c: 'World Wide Web',
          d: 'Wealthy Wild Wordsmiths',
    },
    correctAnswer: 'c'
},
    {
        question: "What is the name of the largest ocean on Earth?",
        answers: {
            a: 'Atlantic',
            b: 'Pacific',
            c: 'Indian',
            d: 'Arctic'
        },
        correctAnswer: 'b'
},
    {
        question: "How many hearts does an octopus have?",
        answers: {
            a: '1',
            b: '2',
            c: '3',
            d: '4'
        },
        correctAnswer:'c'
},
    {
        question: "What is the hottest planet in the solar  system?",
        answers: {
            a: 'Mercury',
            b: 'Pluto',
            c: 'Mars',
            d: 'Venus'
        },
        correctAnswer:'d'
},

    {
        question: "The Statue of Liberty was a gift to the United States from which country?",
        answers: {
            a: 'Belgium',
            b: 'Germany',
            c: 'Spain',
            d: 'France'
        },
        correctAnswer:'d'
},   
    {
        question: "The human boody is made up of approximately how much water?",
        answers: {
            a: '40%',
            b: '50%',
            c: '60%',
            d: '70%'
        },
        correctAnswer:'c'
},   
    {
        question: "Where did Spiderman get his powers from?",
        answers: {
            a: 'Bitten by a radioactive spider',
            b: 'Scientific Experiment',
            c: 'After a dream',
            d: 'Born with them'
        },
        correctAnswer:'a'
},   
    {
        question: "Sodium bicarbonate is a staple in most kitchens. What is its other name?",
        answers: {
            a: 'Vinegar',
            b: 'Baking Soda',
            c: 'Sugar',
            d: 'Salt'
        },
        correctAnswer:'b'
},   
    {
        question: "Cu is the chemical symbol for which element?",
        answers: {
            a: 'Oxygen',
            b: 'Copper',
            c: 'Zinc',
            d: 'Caesium'
        },
     correctAnswer:'b'
},   
    {
        question: "How many colors are in the rainbow?",
        answers: {
            a: '7',
            b: '6',
            c: '10',
            d: '5'
        },
    correctAnswer:'a'
},
]
var nextQuestionArr;
var timeLeft = 15;

function nextQuestion (){
    nextQuestionArr = quizQuestions[Math.floor(Math.random() * quizQuestions.length)];
    
    startBtn.addEventListener("click", nextQuestion)
}

function startQuiz (){
    startBtn.textContent = "Next Question"
    startBtn.addEventListener("click", nextQuestion)

}

startBtn.addEventListener("click", startQuiz)

nextQuestion()