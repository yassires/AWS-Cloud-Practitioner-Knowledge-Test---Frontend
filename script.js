let DATA;
let j;
fetch("qz.json")
    .then((data) => data.json())
    .then((data) => {
        DATA = data.quiz[0];
        j = DATA.questions.sort(()=>Math.random() - 0.5);
    })
    
// setTimeout(() => {
//     console.log(j);
// },20);
var time = 0;
var interval;
let index = 0;
let seconds;
const next_btn = document.getElementById("submit")
const start_btn = document.getElementsByClassName("start")


// start
start_btn[0].addEventListener("click", function (e) {
    clearInterval(interval);
    afficher_question(DATA.questions[index]);
    index++;
})


// submit
next_btn.addEventListener("click", function (e) {
    endQuiz(index)
    clearInterval(interval);
    check()
    afficher_question(DATA.questions[index]);
    
    index++;
    

})


// end 

function endQuiz(index){
    if(index>7){
        
        document.querySelector('.card').style.display='none'
        document.querySelector('.card2').style.display='block'
        next_btn.remove()
        ver()

    }
}

function timer() {
     seconds = 30;

// timer 
    if (seconds > 0) {
        interval = setInterval(() => {
            document.getElementById("seconds").innerHTML=seconds+" Seconds" ;
            seconds--;

            if (seconds == 0) {
                clearInterval(interval);
                index++;
                afficher_question(DATA.questions[index]);
                
            }
        }, 1000);
    } else {

    }
}


function afficher_question(question) {
    
    timer();

    // console.log(question)
   
    let output = `
            <div> 
                <div class="quiz">
                    <h3>Question ${interval}/6</h3>
                    <h5 class="seconds" id="seconds"></h5>
                </div>
                <div class="quiz-area">
                <h2>${question.content}</h2>
                </div>
            <div class="answers-area">
                <div class="answer">
                    <input type="radio" id="answers" name="questions" value="${question.options[0].content}"/>
                    <label for="answer-1">${question.options[0].content}</label>
                </div>
                <div class="answer">
                    <input type="radio" id="answers" name="questions" value="${question.options[1].content}"/>
                    <label for="answer-2">${question.options[1].content}</label>
                </div>
                <div class="answer">
                    <input type="radio" id="answers" name="questions" value="${question.options[2].content}"/>
                    <label for="answer-3">${question.options[2].content}</label>
                </div>
                <div class="answer">
                    <input type="radio" id="answers" name="questions" value="${question.options[3].content}"/>
                    <label for="answer-4">${question.options[3].content}</label>
                </div>
            </div>
            </div>
            
    
    `;
    document.querySelector("#question").innerHTML = output;
}


document.addEventListener("DOMContentLoaded", function() {
    const quizSection = document.querySelector(".card");
    const resultsSection = document.querySelector(".card2");
    const startQuizButton = document.querySelector(".start");
    const informationSection = document.querySelector(".card3");
  
    quizSection.style.display = "none";
    resultsSection.style.display = "none";

    startQuizButton.addEventListener("click", function() {
      quizSection.style.display = "";
      informationSection.style.display = "none";
    });
  });

  let list = []
  function check(){
    let val
  let checks = document.getElementsByName('questions')

    for (let i = 0; i < checks.length; i++) {
        // console.log(checks[i].value)
        if(checks[i].checked){
            val = checks[i].value

            console.log(val)
            list.push(val)
            console.log(list)


        }
        
    }
    
  }


  function ver(){
    for (let i = 0; i < list.length; i++) {
        console.log(list[i])
        console.log(DATA.questions[i].answer.correct)
        if(list[i]===DATA.questions[i].answer.correct){
            console.log('yes')
        }else{
            console.log('no')
        }
    }
  }

  