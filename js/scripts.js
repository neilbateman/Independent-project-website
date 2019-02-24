$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var question1 = parseInt($("#question-one").val());
    var question2 = parseInt($("#question-two").val());
    var question3 = parseInt($("#question-three").val());
    var question4 = parseInt($("#question-four").val());
    var question5 = parseInt($("#question-five").val());
    var result = question1 + question2 + question3 + question4 + question5;

    if(result >= 3){
    alert("Consider a trip to Hawaii!")
    $('#hawaii').show();
  } else if(result < 3 && result >= -3){
    alert("You do not seem certain of much, perhaps you should stay home.")
    $('#couch').show();
  } else {
    alert("Consider many scenic locales in Mexico and South American.")
    $('#southamerica').show();
  }
  });
});
