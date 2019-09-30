function ask() {

  var questionInput = document.getElementById('input');
  questionInput.value = '';

  var eight = document.getElementById("eight");
  eight.classList.add("hidden");

  var float = document.getElementById("float");
  float.style.backgroundColor = "#333";

  var answer = document.getElementById("answer");
  answer.classList.remove("hidden");
  answer.classList.add("fade");

  answer.innerText = predictTheFuture();

  var eightBall = document.getElementById('eight-ball');

  setTimeout(function() {
    answer.classList.toggle("fade");
  }, 1000);

}

function predictTheFuture() {

  var randomNumber = Math.round(Math.random() * 10);

  if (randomNumber % 2 === 0) {
    return "Yes!"
  } else {
    return "No...";
  }

}
