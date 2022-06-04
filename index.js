// Your code here
var questionsArr = [
    {
        question: 'NFL players were not required to wear helmets until 1943',
        answer: true
    },

    {  question: 'A 30 second commercial in the 2021 Super Bowl cost over $5 million',
        answer: true
    },

    {  question:'The Dallas Cowboys is worth over $6B and is one of the most valuable franchises in all of sports',
        answer: true
    },

    {   question:'Eli and Peyton Manning are the only brothers to both win the Super Bowl MVP',
        answer: true
    },

    {   question: 'The top 7 teams from each conference get into the playoffs',
        answer: true
    }

]


function runQuiz () {
    for (var i = 0; i < questionsArr.length; i++) {
        var questions = questionsArr [i]
        var askQuestion = confirm(questions.question)
        
        var userScore = 0 

        if (askQuestion && questions.answer) {
            userScore + 20
            console.log(userScore)
        }
    }
    if (userScore <= 20) {
        alert('Your score is ' + userScore)
    }

}