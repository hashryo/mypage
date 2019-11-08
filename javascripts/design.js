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
  document.querySelector('.block-1').style.backgroundPosition = `0 ${y}px`;
  if (y > 340){
    document.querySelector('.block-2').style.backgroundPosition = `0 ${y-340}px`;
  } else{
    document.querySelector('.block-2').style.backgroundPosition = `0 0`;
  }
  if (y > 680){
    document.querySelector('.block-3').style.backgroundPosition = `0 ${(y-680)*2}px`;
  } else{
    document.querySelector('.block-3').style.backgroundPosition = `0 0`;
  }
  if (y > 680){
    document.querySelector('.block-4').style.opacity = `${(y-800)/340}`;
    document.querySelector('.block-4').style.top = `430px`;
  } else{
    document.querySelector('.block-4').style.opacity = `0`;
  }
  if (y > 1000 ){
    document.querySelector('.block-4').style.display = `none`;
  }
});
  
}, false)

