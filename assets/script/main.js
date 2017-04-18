$(document).ready(function(){
  var body = $('body');

  $('#step1').append( `
    <h3> Step 1 </h3>
    <pre>
      $('.story').on('click', '#step1', function() {
        $('#step2').css({'display': 'block'});
      });
    </pre>`);
  $('.story').on('click', '#step1', function() {
    $('#step2').css({'display': 'block'});
  });

  $('#step2').append( `
    <h3> Step 2 </h3>
    <pre>
      $('.story').on('click', '#step2', function() {
        var top = $('#step3').position().top;
        $(window).scrollTop( top );
      });
    </pre>`);
  $('.story').on('click', '#step2', function() {
    $('.story').on('click', '#step2', function() {
      var top = $('#step3').position().top;
      $(window).scrollTop( top );
      setTimeout(function() {
        window.location = 'chapter2.html';
      }, 30000);
    });
  });

  $('#step3').append( `
    <h3> Step 3 </h3>
    <pre>
      setTimeout(function() {
        window.location = 'chapter2.html';
      }, 30000);
    </pre>`);


  $('#step4').append( `
    <h3> Step 4 </h3>
    <pre>
      if(!$('#step4')[0].style['background-color']) {
        $('#step4').css({'background-color': 'black', 'color': 'white'});
      } </pre> <span> <pre>
      else {
        $('.story').append(step5());
      }
    </span></pre>
    `);

  $('.story').on('click', '#step4', function() {
    if(!$('#step4')[0].style['background-color']) {
      $('#step4').css({'background-color': 'black', 'color': 'white'});
    } else {
      $('.story').append(step5());
    }
  });

  function step5() {
    var count = $('.step5').length + 1;

    return `<div class='step step5'>
      <p>
       ${content(count)}
      </p>
    </div>`;
  }

  function content(count) {
    if( count < 3 ) {
      return `There are ${count} step5 divs`;
    } else if (count < 5) {
      return 'Stop clicking step4 already!!';
    } else {
      return window.location = 'chapter3.html';
    }
  }

});
