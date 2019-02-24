var totalScore = 10;
var userScore = 0;
var time; 
var timerInterval = 0;








function updateTimer(){
    time--
    $('#theCount').html(time);
    if (time === -1) {
        endGame2();
    }
                
}

$(document).ready(function(){
    startGame();
    $('input').click(function(){
        tally()
    })
});

function startGame(){
    timerInterval = setInterval(updateTimer, 1000);
    time = 60;
    userScore = 0;
}

function endGame(){
    clearInterval(timerInterval)
    alert("Good Job! You got " + userScore + " right out of " + totalScore + ".")
   
}

function endGame2() {
    clearInterval(timerInterval)
    if (time === -1) {
        alert("Times Up! You got " + userScore + " right out of " + totalScore + ".");
    }
}

function tally() {
    userScore = 0;
    var allQuestionsAnswered = true;
    
    if ( $("input[name='sac']:checked").val()=== '1'){
        userScore++
    }
    else if ($("input[name='sac']:checked").val()!= '0') {
        allQuestionsAnswered = false;
    }

    if ( $("input[name='everest']:checked").val()=== '1'){
        userScore++
    }
    else if ($("input[name='everest']:checked").val()!= '0') {
        allQuestionsAnswered = false;
    }

    if ( $("input[name='tree']:checked").val()=== '1'){
        userScore++
    }
    else if ($("input[name='tree']:checked").val()!= '0') {
        allQuestionsAnswered = false;
    }

    if ( $("input[name='blues']:checked").val()=== '1'){
        userScore++
    }
    else if ($("input[name='blues']:checked").val()!= '0') {
        allQuestionsAnswered = false;
    }

    if ( $("input[name='note']:checked").val()=== '1'){
        userScore++
    }
    else if ($("input[name='note']:checked").val()!= '0') {
        allQuestionsAnswered = false;
    }

    if ( $("input[name='edm']:checked").val()=== '1'){
        userScore++
    }
    else if ($("input[name='edm']:checked").val()!= '0') {
        allQuestionsAnswered = false;
    }

    if ( $("input[name='pres']:checked").val()=== '1'){
        userScore++
    }
    else if ($("input[name='pres']:checked").val()!= '0') {
        allQuestionsAnswered = false;
    }

    if ( $("input[name='state']:checked").val()=== '1'){
        userScore++
    }
    else if ($("input[name='state']:checked").val()!= '0') {
        allQuestionsAnswered = false;
    }

    if ( $("input[name='country']:checked").val()=== '1'){
        userScore++
    }
    else if ($("input[name='country']:checked").val()!= '0') {
        allQuestionsAnswered = false;
    }

    if ( $("input[name='cat']:checked").val()=== '1'){
        userScore++
    }
    else if ($("input[name='cat']:checked").val()!= '0') {
        allQuestionsAnswered = false;
    }

    if (allQuestionsAnswered == true) {
        endGame();
    }

    

    
    
              
    console.log(userScore);
    
}




