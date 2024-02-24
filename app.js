var questions = [
  {
    question: "Html Stands For _______________________",
    options: [
      "Hyper Text Makeup Language",
      "html",
      "Case Cading Style Sheet",
      "Hypertext markup language",
    ],
    correctAns: "Hypertext markup language",
  },
  {
    question: "Css Stands For _______________________",
    options: [
      "Casecading Style Sheet",
      "Java",
      "Ram",
      "Hypertext markup language",
    ],
    correctAns: "Casecading Style Sheet",
  },
  {
    question: "Js Stands For _______________________",
    options: ["Java Style", "Java Script", "Script", "Script Src"],
    correctAns: "Java Script",
  },
  {
    question: "Dom Stands For _______________________",
    options: ["Document Object Model", "html", "Css", "Java"],
    correctAns: "Document Object Model",
  },
  {
    question: "Ram Stands For _______________________",
    options: ["Read Only Memory", "Dom", "Random Acccess Memory", "For Pc"],
    correctAns: "Random Acccess Memory",
  },
  {
    question: "Rom Stands For _______________________",
    options: ["Hyper Text Markup Language", "html", "HTml", "Read Only Memory"],
    correctAns: "Read Only Memory",
  },
];

var question = document.getElementById("question");
var optionParent = document.getElementById("optionParent");
var totalQuestions = document.getElementById("totalQuestions");
var currentQuestion = document.getElementById("currentQuestion")

var indexValue = 0;
var marks = 0;

console.log(optionParent);
function showQuestion(){
    question.innerHTML = questions[indexValue].question;
    for(i=0; i< questions[indexValue].options.length; i++){

      var optValue = questions[indexValue].options[i];
      var curValue = questions[indexValue].correctAns;
      optionParent.innerHTML += 
      `<div class="answerOption">
      <h3 id="answer" onclick=checkQuestion(${optValue}, ${curValue})>${questions[indexValue].options[i]}</h3>
      </div>
      `
    }
    currentQuestion.innerHTML = indexValue + 1;
    totalQuestions.innerHTML = questions.length;
}

showQuestion()

function nextQuestion(){
  if(indexValue + 1 == questions.length){

  }
  else{
    indexValue++
  }
}


function checkQuestion(optionValue, correctValue){
  if(optionValue == correctValue){
    marks++;
    console.log(marks);
  }
  else{
    nextQuestion();
  }
}