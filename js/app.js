(function() {
  'use strict';

  $('.buttons').on('click', (event) => {
    const buttonText = $(event.target).attr('name');
    const screenText = $('#screen').text(); // empty

    $('#screen').text(screenText + buttonText);
  });

  $('#clear').on('click', (event) => {
    $('#screen').text('');
    event.stopPropagation();
  });

  $('#equals').on('click', (event) => {
    const buttonText = $(event.target).text(); //
    const screenText = $('#screen').text(); // empty

    $('#screen').text(screenText + buttonText);
    $('#screen').text(eval(screenText));
    event.stopPropagation();
  });
})();
