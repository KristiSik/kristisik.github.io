$(document).ready(function(){
    var COUNT_OF_QUESTIONS = 10;
    $("#ready").click(function(){
        var correctAnswers = [0, 3, 2, 4, 1, 2, 3, 2, 1, 3, 2];
        var countOfCorrect = 0;
        for (i = 1; i <= COUNT_OF_QUESTIONS; i++) {
            if (correctAnswers[i] == $("input[name='"+ i +"']:checked").val()) {
                countOfCorrect++;
            }
        }
        alert(countOfCorrect + " з " + COUNT_OF_QUESTIONS + " — правильні.");
        document.location = "index.html";
    });
});