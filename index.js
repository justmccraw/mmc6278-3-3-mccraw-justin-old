// Your code here
var questionsArr = [
    {
        question: 'NFL players were not required to wear helmets until 1943',
        answer: true
    },

    {  question: 'A 30 second commercial in the 2021 Super Bowl cost over $5 million',
        answer: true
    },

    {  question:'The Dallas Cowboys is worth over $9B and is one of the most valuable franchises in all of sports',
        answer: false
    },

    {   question:'Eli and Peyton Manning are the only brothers to both win the Super Bowl MVP',
        answer: true
    },

    {   question: 'The top 7 teams from each conference get into the playoffs',
        answer: true
    }

]

var userScore = 0

function runQuiz () {
    for (var i = 0; i < questionsArr.length; i++) {
        var questions = questionsArr [i]
        var askQuestion = confirm(questions.question)      
       

        if (askQuestion === questions.answer) {
            userScore++
        }
    }
    if (userScore > 0) {
        alert('Your score is ' + (userScore/i*100) + '%')

        var scoreNum = (userScore/i*100)
        var userNum = parseInt(scoreNum)
        Math.round(userNum)
        console.log(userNum)
    }
    else {
        alert('Your score is 0' + '%')
    }

}