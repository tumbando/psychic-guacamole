import $ from 'jquery';

$('.welcome button').on('click', function(){
  // $('.welcomeContainer').addClass('hidden');
  $('.welcomeContainer').slideUp();
  $('.chatroom').slideDown();
    $.ajax({
     url: 'http://tiny-za-server.herokuapp.com/collections/louie-chatapp2',
     dataType: 'json',
     success: function(response) {
       response.forEach(function(message){
         $('.texts').prepend('<p class="othertexts">' + message.username + ': ' + message.body + '(' + message.timestamp + ')' + '</p>');
      });

       }
     });
});

$('.chatroom button').on('click', function(){
  let $username= $('.welcome input').val();
  let $message = $('.chatroom input').val();
  let moment = require('moment');

  $.ajax({
    url: 'http://tiny-za-server.herokuapp.com/collections/louie-chatapp2',
    type: 'POST',
    dataType: 'json',
    success: function(response) {
      console.log(response);
      $('.texts').append('<p class = "mytexts">' + response.username + ': ' + response.body + '     ' + '(' + response.timestamp + ')' + '</p>');
    },
    data: {
      "username":$username,
      "body": $message,
      "timestamp": moment().format('lll')

      }
  });

});
