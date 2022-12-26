let DATA;
fetch("qz.json")
    .then((data) => data.json())
    .then((data) => {
        DATA = data.quiz[0];
    })

var time = 0;
var interval;
let index = 0;
let seconds;
const next_btn = document.getElementById("submit")
const start_btn = document.getElementsByClassName("start")
console.log(start_btn)
// start
start_btn[0].addEventListener("click", function (e) {
    clearInterval(interval);
    afficher_question(DATA.questions[index]);
    index++;
   
})
// submit
next_btn.addEventListener("click", function (e) {
    // console.log(DATA)
    clearInterval(interval);
    afficher_question(DATA.questions[index]);
    index++;
    endQuiz(index)

})
// end 

function endQuiz(index){

    
    console.log('jhkjhkj',index)
    if(index==6){
        
        document.querySelector('.card').style.display='none'
        document.querySelector('.card2').style.display='block'
        next_btn.remove()
    }
    // if(index>6){
    //     resultsSection.style.display = "block";
    //     quizSection.style.display = "none";
    //     informationSection.style.display = "none";
    // }
 


}

function timer() {
     seconds = 30;

    // timer 
    if (seconds > 0) {
        interval = setInterval(() => {
            console.log(seconds);
            console.log(index);
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

    console.log(question)
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
                <input type="radio" id="answer-1" name="questions" />
                <label for="answer-1">${question.options[0].content}</label>
                </div>
                <div class="answer">
                <input type="radio" id="answer-2" name="questions" />
                <label for="answer-2">${question.options[1].content}</label>
                </div>
                <div class="answer">
                <input type="radio" id="answer-3" name="questions" />
                <label for="answer-3">${question.options[2].content}</label>
                </div>
                <div class="answer">
                <input type="radio" id="answer-4" name="questions" />
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