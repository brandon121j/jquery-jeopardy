// Get JSON File Data
fetch("jeopardy.json")
    .then(data => data.json())
    .then(rawData => {question = rawData})

// Allows user to either continue game or create new game
let dialog = confirm('Continue Game?');
    if(dialog == true) {
    } else {
        localStorage.removeItem('score');
    }

const one = $('.one');

const two = $('.two');

const three = $('.three');

const four = $('.four');

const five = $('.five');

const six = $('.six');

const correctAnswer = $('.correctAnswer');

const questionShower = $('.question');

let scoreShower = $('.title span')

let userInput = $('#userText');

let userSubmit = $('#submitter');

let question = [];

let currentQuestion = [];

let questionSetter = "";

let number = "";

let score = 0;

let tempHolder = 0;

// Loads players score
let initialValue = localStorage.getItem('score');
if (initialValue === null) {
    initialValue = 0;
} else {
    score = Number(initialValue);
    scoreShower.html('$' + score);
}

// Function for getting $100 questions
function getOne() {
    for(let iterator in question) {
        if (question[iterator].value === "$100") {
            // Sets current question
            currentQuestion.push(question[iterator])
            // Gets random question; multiply Math.random by length 
            number = Math.floor(Math.random() * 2010);
        }
    }
    tempHolder = 100;
    questionSetter = currentQuestion[number]
    questionShower.html(`<p>${questionSetter.question}</p>`)
    console.log(questionSetter.answer);
}

// Function for getting $200 questions
function getTwo() {
    for(let iterator in question) {
        if (question[iterator].value === "$200") {
            currentQuestion.push(question[iterator])
            number = Math.floor(Math.random() * 6890);
        }
    }
    questionSetter = currentQuestion[number]
    questionShower.html(`<p>${questionSetter.question}</p>`)
    tempHolder = 200;
    console.log(questionSetter.answer)
}

// Function for getting $300 questions
function getThree() {
    for(let iterator in question) {
        if (question[iterator].value === "$300") {
            currentQuestion.push(question[iterator])
            number = Math.floor(Math.random() * 1947);
        }
    }
    tempHolder = 300;
    questionSetter = currentQuestion[number]
    questionShower.html(`<p>${questionSetter.question}</p>`)
    console.log(questionSetter.answer)
}

// Function for getting $400 questions
function getFour() {
    for(let iterator in question) {
        if (question[iterator].value === "$400") {
            currentQuestion.push(question[iterator])
            number = Math.floor(Math.random() * 9610);
        }
    }
    tempHolder = 400;
    questionSetter = currentQuestion[number]
    questionShower.html(`<p>${questionSetter.question}</p>`)
    console.log(questionSetter.answer)
}

// Function for getting $500 questions
function getFive() {
    for(let iterator in question) {
        if (question[iterator].value === "$500") {
            currentQuestion.push(question[iterator])
            number = Math.floor(Math.random() * 1996);
        }
    }
    tempHolder = 500;
    questionSetter = currentQuestion[number]
    questionShower.html(`<p>${questionSetter.question}</p>`)
    console.log(questionSetter.answer)
}

// Function for getting $600 questions
function getSix() {
    for(let iterator in question) {
        if (question[iterator].value === "$600") {
            currentQuestion.push(question[iterator])
            number = Math.floor(Math.random() * 4652);
        }
    }
    tempHolder = 600;
    questionSetter = currentQuestion[number]
    questionShower.html(`<p>${questionSetter.question}</p>`)
    console.log(questionSetter.answer)
}

function answerSubmitter() {
    if (userInput[0].value === questionSetter.answer && questionSetter.length !== 0 ||
        userInput[0].value === questionSetter.answer.toLowerCase() && questionSetter.length !== 0
        ) {
            score += tempHolder;
            localStorage.setItem('score', Number(score));
        scoreShower.html('$' + score);
        questionShower.html(`<h3>CORRECT!</h3>`);
        questionSetter = [];
    }
    else if(questionSetter.length == 0) {
        questionShower.html(`<h3></h3>`);
        correctAnswer.html(`<h3></h3>`)
    }
    else {
        questionShower.html(`<h3>FALSE</h3>`);
        correctAnswer.html(`<h3>${questionSetter.answer}</h3>`)
        questionSetter = [];
    }
}

// Allows enter button to submit answer
$(document).keyup(function(e) {
    if (e.which === 13) {
        answerSubmitter();
    }
});

userSubmit.on('click', answerSubmitter) 

one.on('click', getOne);

two.on('click', getTwo);

three.on('click', getThree);

four.on('click', getFour);

five.on('click', getFive);

six.on('click', getSix);