$(document).ready(function(){
  console.log('load');
  console.log('onLoad');
  var body = $('body');

  $('#step1').append( `
    <p>
      $('.story').on('click', '#step1', function() {<br>
      &nbsp;&nbsp;'#step2').css({'display': 'block'});<br>
      });<br>
    </p>`);
  $('.story').on('click', '#step1', function() {
    $('#step2').css({'display': 'block'});
  });

  $('#step2').append( `<p>
      $('.story').on('click', '#step2', function() {<br>
      &nbsp;&nbsp;var top = $('#step3').position().top;<br>
      &nbsp;&nbsp;$(window).scrollTop( top );<br>
      });
    </p>`);
  $('.story').on('click', '#step2', function() {
    var top = $('#step3').position().top;
    $(window).scrollTop( top );
  });

  $('#step3').append( `<p>
    </p>`);
  $('.story').on('click', '#step3', function() {
  });
});
