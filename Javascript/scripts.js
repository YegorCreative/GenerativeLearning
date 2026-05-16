var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});
/*  close button*/
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

$('input').on('change', function() {
  $('body').toggleClass('blue');
});

/* reflection toggle */
document.addEventListener('DOMContentLoaded', function () {
    var reflectionBtn = document.querySelector('.reflection-button');
    if (reflectionBtn) {
        reflectionBtn.addEventListener('click', function () {
            var answer = document.querySelector('.reflection-answer');
            if (answer) {
                answer.classList.toggle('active');
            }
        });
    }
});
