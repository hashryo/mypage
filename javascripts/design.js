document.addEventListener("DOMContentLoaded", function(){
  document.querySelector('.second').addEventListener('click', function(){
    document.querySelectorAll('.box').forEach((box) => {
      box.classList.add('moved');
    });
  });
}, false)

