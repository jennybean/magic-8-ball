function ask() {

  // Clear the question
  var questionInput = document.getElementById('input');
  questionInput.value = '';

  // Hide the 8
  var eight = document.getElementById("eight");
  eight.classList.add("hidden");

  // Change the background from grey to white
  var float = document.getElementById("float");
  float.style.backgroundColor = "#333";

  // Show the answer
  var answer = document.getElementById("answer");
  answer.classList.remove("hidden");
  // Make the answer "fade" in
  answer.classList.add("fade");

  // Make the answer...
  answer.innerText = predictTheFuture();

  /*
   * How do I make "eightBall" shake?
   * HINT: Check out how "fade" works!
   */
  var eightBall = document.getElementById('eight-ball');

  // Restart all over again!
  setTimeout(function() {
    answer.classList.toggle("fade");
  }, 1000);

}

function predictTheFuture() {

  // Some Javascript magic ✨
  var randomNumber = Math.round(Math.random() * 10);

  if (randomNumber === 1) {
    return "Yes!"
  } else if (randomNumber === 2) {
    return "No...";
  }

  /*
   * How do I add a new answer?
   */
  else {
    return "Try again!"
  }

}
