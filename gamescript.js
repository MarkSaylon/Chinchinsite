//Dito niyo ayusin yung questions
const questions = [{question: 'Tanong 1',answers:[{text: 'Ey', correct:false},{text: 'Option2', correct:true}]},
            {question: 'Tanong 2',answers:[{text: 'CHinchintaba', correct:true},{text: 'Option2', correct:false}]},
            {question: 'Tanong 3',answers:[{text: 'Option1', correct:false},{text: 'Option2', correct:true}]},
            {question: 'Tanong 4',answers:[{text: 'Option1', correct:false},{text: 'Option2', correct:true}]},
            {question: 'Tanong 5',answers:[{text: 'Option1', correct:false},{text: 'Option2', correct:true}]}];

const questionElement = document.getElementById("tanong");
const answersElement = document.getElementById("sagot");
const nextElement = document.getElementById("next");

let currentQuestionIndex = 0;
let score = 0; 

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    showQuestion();
}

function showQuestion(){
    reset();
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.innerHTML = currentQuestion.question;
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("sagotbtn");
        answersElement.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", sumagotNa);
    })
}

function reset(){
    nextElement.style.display = "none";
    while(answersElement.firstChild){
        answersElement.removeChild(answersElement.firstChild);
    }

}
function sumagotNa(e){
    const sinagot = e.target;
    const isCorrect = sinagot.dataset.correct;
    if (isCorrect){
        sinagot.classList.add("tama");
        console.log('wow')
        score++;
    }else{
        sinagot.classList.add("mali");
        console.log('mali')
    }

    Array.from(answersElement.children).forEach(button => {
        if(button.dataset.correct){
            button.classList.add("tama");
        }
        button.disabled = true;
    });
    nextElement.style.display = "block";
}
function next(){
    if(currentQuestionIndex < questions.length){
        handleNext();
    }else{
        startQuiz();
    }
}
function handleNext(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }else{
        showScore();
    }
}
function showScore(){
    reset();
    questionElement.innerHTML = `You have scored: ${score}`;
    nextElement.innerHTML = "Play Again";
    nextElement.style.display = "block";
}

startQuiz();

