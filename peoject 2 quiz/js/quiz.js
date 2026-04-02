let current=0;
let score=0;

let question=document.getElementById("question");
let options=document.getElementById("options");

let time=60;

let timer=setInterval(function(){

time--;

document.getElementById("time").innerText=time;

if(time==0){
finishQuiz();
}

},1000);

function loadQuestion(){

let q=questions[current];

question.innerText=q.question;

options.innerHTML="";

q.options.forEach((opt,index)=>{

let btn=document.createElement("div");

btn.classList.add("option");

btn.innerText=opt;

btn.onclick=function(){

if(index==q.answer){
score++;
}

};

options.appendChild(btn);

});

}

loadQuestion();

function nextQuestion(){

current++;

if(current<questions.length){
loadQuestion();
}
else{
finishQuiz();
}

}

function finishQuiz(){

clearInterval(timer);

localStorage.setItem("score",score);

window.location="result.html";

}