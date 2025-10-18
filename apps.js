function showPopup() {
alert("Assalamualaikum warahmatullah! Welcome to Web Dev Learning Quiz App ") 
}
window.onload = showPopup

var quizData = [
  {
    quizQuestion: " Q1.  What does HTML stand for?",
    otp1_Text: "Hyper Text Markup Language",
    opt2_Text: "HighText Machine Language",
    opt3_Text: "Hyperlink and Text Markup Language",
    opt4_Text: "Home Tool Markup Language",
    answer: "Hyper Text Markup Language"
  },
  {
    quizQuestion: " Q2. Which HTML tag is used to create a hyperlink?",
    otp1_Text: "<a>",
    opt2_Text: "<link>",
    opt3_Text: "<href>",
    opt4_Text: "<src>",
    answer: "<a>"
  },
  {
    quizQuestion: " Q3. Which tag is used to insert an image in HTML?",
    otp1_Text: "<img>",
    opt2_Text: "<image>",
    opt3_Text: "<src>",
    opt4_Text: "<picture>",
    answer: "<img>"
  },
  {
    quizQuestion: " Q4. Which attribute is used to open a link in a new tab?",
    otp1_Text: "target='_blank'",
    opt2_Text: "new='tab'",
    opt3_Text: "open='new'",
    opt4_Text: "window='new'",
    answer: "target='_blank'"
  },
  {
    quizQuestion: " Q5. Which property changes the text color in CSS?",
    otp1_Text: "font-color",
    opt2_Text: "text-color",
    opt3_Text: "color",
    opt4_Text: "background-color",
    answer: "color"
  },
  {
    quizQuestion: "Q6. What does CSS stand for?",
    otp1_Text: "Cascading Style Sheets",
    opt2_Text: "Computer Style System",
    opt3_Text: "Creative Style Syntax",
    opt4_Text: "Colorful Style Sheets",
    answer: "Cascading Style Sheets"
  },
  {
    quizQuestion: " Q7. Which CSS property controls the text size?",
    otp1_Text: "text-size",
    opt2_Text: "font-size",
    opt3_Text: "text-style",
    opt4_Text: "font-weight",
    answer: "font-size"
  },
  {
    quizQuestion: " Q8. Which is the correct syntax to link an external CSS file?",
    otp1_Text: "<link rel='stylesheet' href='style.css'>",
    opt2_Text: "<style src='style.css'>",
    opt3_Text: "<css link='style.css'>",
    opt4_Text: "<stylesheet>style.css</stylesheet>",
    answer: "<link rel='stylesheet' href='style.css'>"
  },
  {
    quizQuestion: " Q9. How do you write comments in CSS?",
    otp1_Text: "// comment",
    opt2_Text: "/* comment */",
    opt3_Text: "<!-- comment -->",
    opt4_Text: "# comment",
    answer: "/* comment */"
  },
  {
    quizQuestion: " Q10. Which symbol is used to select an id in CSS?",
    otp1_Text: "#",
    opt2_Text: ".",
    opt3_Text: "$",
    opt4_Text: "@",
    answer: "#"
  },
  {
    quizQuestion: " Q11. What does JS stand for?",
    otp1_Text: "JavaSource",
    opt2_Text: "JavaScript",
    opt3_Text: "JustScript",
    opt4_Text: "JScript",
    answer: "JavaScript"
  },
  {
    quizQuestion: " Q12. Which method is used to print data in console?",
    otp1_Text: "print()",
    opt2_Text: "log.console()",
    opt3_Text: "console.log()",
    opt4_Text: "display()",
    answer: "console.log()"
  },
  {
    quizQuestion: " Q13. Which keyword is used to declare a variable in JavaScript?",
    otp1_Text: "var",
    opt2_Text: "variable",
    opt3_Text: "let",
    opt4_Text: "Both var and let",
    answer: "Both var and let"
  },
  {
    quizQuestion: " Q14. How do you create a function in JavaScript?",
    otp1_Text: "function = myFunction()",
    opt2_Text: "function myFunction()",
    opt3_Text: "create function myFunction()",
    opt4_Text: "func myFunction()",
    answer: "function myFunction()"
  },
  {
    quizQuestion: " Q15. How do you call a function named 'test'?",
    otp1_Text: "call test()",
    opt2_Text: "test()",
    opt3_Text: "run test()",
    opt4_Text: "execute test()",
    answer: "test()"
  },
  {
    quizQuestion: " Q16. Which event occurs when the user clicks a button?",
    otp1_Text: "onmouseover",
    opt2_Text: "onchange",
    opt3_Text: "onfocus",
    opt4_Text: "onclick",
    answer: "onclick"
  },
  {
    quizQuestion: " Q17. Which operator is used to assign a value to a variable?",
    otp1_Text: "-",
    opt2_Text: "=",
    opt3_Text: "*",
    opt4_Text: "+",
    answer: "="
  },
  {
    quizQuestion: " Q18. What will `typeof null` return?",
    otp1_Text: "'null'",
    opt2_Text: "'undefined'",
    opt3_Text: "'object'",
    opt4_Text: "'number'",
    answer: "'object'"
  },
  {
    quizQuestion: " Q19. Which method converts JSON data to a JavaScript object?",
    otp1_Text: "JSON.stringify()",
    opt2_Text: "JSON.parse()",
    opt3_Text: "JSON.object()",
    opt4_Text: "JSON.convert()",
    answer: "JSON.parse()"
  },
  {
    quizQuestion: " Q20. How do you write 'Hello World' in an alert box?",
    otp1_Text: "alertBox('Hello World')",
    opt2_Text: "msg('Hello World')",
    opt3_Text: "alert('Hello World')",
    opt4_Text: "show('Hello World')",
    answer: "alert('Hello World')"
  }
];


var count = 0
var score = 0 
function updateData(index) {
    var q = document.getElementById("questions")
    var opt1_Text = document.getElementById("opt1_Text")
    var opt2_Text = document.getElementById("opt2_Text")
    var opt3_Text = document.getElementById("opt3_Text")
    var opt4_Text = document.getElementById("opt4_Text")
    var option1 = document.getElementById("option1")
    var option2 = document.getElementById("option2")
    var option3 = document.getElementById("option3")
    var option4 = document.getElementById("option4")


    q.innerText = quizData[index].quizQuestion
    opt1_Text.innerText= quizData[index].otp1_Text
    opt2_Text.innerText= quizData[index].opt2_Text
    opt3_Text.innerText= quizData[index].opt3_Text
    opt4_Text.innerText= quizData[index].opt4_Text
    option1.checked = false
    option2.checked = false
    option3.checked = false
    option4.checked = false
}
function nextHandler() {
  var selectedAnswer = ""
  if (document.getElementById("option1").checked) {
    selectedAnswer = document.getElementById("opt1_Text").innerText
  }
  else if (document.getElementById("option2").checked) {
    selectedAnswer = document.getElementById("opt2_Text").innerText
  }
  else if (document.getElementById("option3").checked) {
    selectedAnswer = document.getElementById("opt3_Text").innerText
  }
  else if (document.getElementById("option4").checked) {
    selectedAnswer = document.getElementById("opt4_Text").innerText
  }
  if(selectedAnswer===quizData[count].answer){
    score++
  }
  count++
  if(count<quizData.length) {
    updateData(count)
  }
  else{
    showResult()
  }
}

 function startQuiz() {
    document.getElementById("home").style.display = "none"
    document.getElementById("quiz-box").style.display= "block"
    updateData(count)
}

function showResult() {
  var scoreElement = document.getElementById("score")
  var remarks = document.getElementById("remarks")
  scoreElement.innerHTML = `your score ${score} out of ${quizData.length}`
  if (score > 15) {
    remarks.innerHTML = "🌟 <b>Excellent-</b> You did a great job!";
    remarks.style.color = "green";
  } else if (score >= 10 && score <= 15) {
    remarks.innerHTML = "👍 <b>Good-</b> Keep it up!";
    remarks.style.color = "orange";
  } else { 
    remarks.innerHTML = "😔 <b>Poor-</b> Best of luck for next time!";
    remarks.style.color = "white";
  }
  document.getElementById("quiz-box").style.display = "none"
  document.getElementById("showResult").style.display= "block"

}

function restartHandler() {
  count = 0
  score = 0
  document.getElementById("showResult").style.display = "none"
  document.getElementById("quiz-box").style.display = "block"
  updateData(count)
}
function goHomepage() {
  document.getElementById("showResult").style.display = "none"
  document.getElementById("home").style.display = "block"
  updateData(count)

}



