$(document).ready(function(e) {
  // 'use strict';

  $('.btn').click(function(e) {

    $('#screen').val($('#screen').val() + $(this).val());

  });

  $('#clear').click(function(e) {
    $('#screen').val('');
  });

  $('#equals').click(function(e) {
    $('#screen').val(eval($('#screen').val()));
  });


});

//
// (function() {
//   'use strict';
//
//   $('span').on('click', (event) => {
//     $(event.target).toggleClass('completed hot');
//   });
//
//   $('#add-movie').on('submit', (event) => {
//     event.preventDefault();
//     const movieTitle = $('#movie-title').val();
//
//     const $newMovie = $('<li>').text(movieTitle);
//
//     $('.movies ul').append($newMovie);
//
//     $('#movie-title').val('');
//
//   });
//
// })();
