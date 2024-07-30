$(document).ready(function() {
    // Carica le domande dal file JSON
    $.getJSON('questions.json', function(data) {
        var quizContainer = $('#quiz');
        
        // Genera il quiz
        data.forEach(function(question, index) {
            var questionHTML = '<div class="question">';
            questionHTML += '<h3>' + (index + 1) + '. ' + question.question + '</h3>';
            questionHTML += '<div class="options">';
            question.options.forEach(function(option) {
                questionHTML += '<label><input type="radio" name="question' + index + '" value="' + option + '"> ' + option + '</label>';
            });
            questionHTML += '</div></div>';
            quizContainer.append(questionHTML);
        });

        // Gestisci l'invio del quiz
        $('#submit').click(function() {
            var score = 0;

            data.forEach(function(question, index) {
                var selectedOption = $('input[name="question' + index + '"]:checked').val();
                if (selectedOption === question.answer) {
                    score++;
                }
            });

            $('#results').html('Hai risposto correttamente a ' + score + ' su ' + data.length + ' domande.');
        });
    });
});
