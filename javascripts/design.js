document.addEventListener("DOMContentLoaded", function(){
  // ボックスアニメーション
  document.querySelector('.second').addEventListener('click', function(){
    document.querySelectorAll('.box').forEach((box) => {
      box.classList.add('moved');
    });
  });
// 　パララクス
document.addEventListener('scroll', function(){
  var y = window.pageYOffset ;
  document.querySelector('.element-1').style.top = `${100+y/3}px`;
  document.querySelector('.element-2').style.top = `${100+y/4}px`;
  document.querySelector('.element-3').style.top = `${100+y/3}px`;
  document.querySelector('.element-4').style.top = `${100+y/5}px`;
  document.querySelector('.element-5').style.top = `${100+y/3}px`;
  document.querySelector('.element-6').style.top = `${100+y/4}px`;
  document.querySelector('.element-7').style.top = `${100+y/3}px`;
});
  
}, false)

