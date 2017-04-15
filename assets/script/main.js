$(document).ready(function(){
  console.log('load');
  console.log('onLoad');
  var body = $('body');

  $('#step1').append( `
    <p>
      $('.story').on('click', '#step1', function() {<br>
      &nbsp;&nbsp;$('#step2').css({'display': 'block'});<br>
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
    console.log('click');
    $('.story').on('click', '#step2', function() {
      var top = $('#step3').position().top;
      $(window).scrollTop( top );
      setTimeout(function() {
        window.location = 'chapter2.html';
      }, 20000)
    });
  });

  $('#step3').append( `<p>
    setTimeout(function() {<br>
    &nbsp;&nbsp;window.location = 'chapter2.html';<br>
    }, 20000)<br>
    </p>`);


  $('#step4').append( `<p>
    if( !$('#step4')[0].style['background-color'] ) {<br>
    &nbsp;&nbsp;$('#step4').css( {'background-color': 'black', 'color': 'white'} );<br>
    } <span>else {<br>
    &nbsp;&nbsp;$('.story').append( step5 );<br>
    }</span>
    </p>`);

  $('.story').on('click', '#step4', function() {
    var step5 = `<div class=step id=step5>
      <p>
        content
      </p>
    </div>`
    if(!$('#step4')[0].style['background-color']) {
      $('#step4').css({'background-color': 'black', 'color': 'white'});
    } else {
      $('.story').append(step5);
    }
  });

});
