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
  if (y > 1100){
    document.querySelector('.element-1').style.top = `${100+y/3}px`;
    document.querySelector('.element-2').style.top = `${100+y/4}px`;
    document.querySelector('.element-3').style.top = `${100+y/3}px`;
    document.querySelector('.element-4').style.top = `${100+y/5}px`;
    document.querySelector('.element-5').style.top = `${100+y/3}px`;
    document.querySelector('.element-6').style.top = `${100+y/4}px`;
    document.querySelector('.element-7').style.top = `${100+y/3}px`;
  } 
  document.querySelector('.block-1').style.backgroundPosition = `0 ${y}px`;
  if (y > 200){
    document.querySelector('.block-2').style.backgroundPosition = `0 ${y-200}px`;
  } else{
    document.querySelector('.block-2').style.backgroundPosition = `0 0`;
  }
  if (y > 400){
    document.querySelector('.block-3').style.backgroundPosition = `0 ${(y-400)*2}px`;
  } else{
    document.querySelector('.block-3').style.backgroundPosition = `0 0`;
  }
  if (y > 400 ){
    document.querySelector('.block-4').style.opacity = `${(y-400)/200}`;
    document.querySelector('.block-4').style.top = `320px`;
  } else{
    document.querySelector('.block-4').style.opacity = `0`;
  }
});
  
}, false)

