document.addEventListener("DOMContentLoaded", function(){
  var show = document.getElementById('show');
  var hide = document.getElementById('hide');
  var canvas;
  var ctx;
  var Ball;
  var balls = [];
  var start = document.querySelector('.fa-bullseye');
  var msg =　document.querySelector('.top-p');
  var flag = 0;

// トップメッセージ点滅
setInterval(function(){
  if (msg){
    if(flag == 0){
      msg.style.display="none";
      flag = 1;
    }
    else{
      msg.style.display="block";
      flag = 0;
    }
  }
},400);

// スタートアイコン表示
  if (start){
    start.style.display="none";
    setTimeout(function(){
      start.style.display="block";
      msg.innerHTML = "&nbsp;&nbsp;Tuch the icon";
    },8000);
  }
// ハンバーガーメニュー
  show.addEventListener('click', function() {
    document.body.className = 'menu-open';
  });
  hide.addEventListener('click', function() {
    document.body.className = '';
  });

// インタラクティブアート
  // キャンバスの設定
  canvas = document.getElementById('mycanvas');
  if (!canvas || !canvas.getContext) return false;
  ctx = canvas.getContext('2d');
　// 最小値と最大値の間のランダムな値取得
  function rand(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
  }
  canvas.addEventListener('click', function(e) {
    var x, y, r;
    var rect;
    // キャンバスの領域を取得
    rect = e.target.getBoundingClientRect();
    x = e.clientX - rect.left;
    y = e.clientY - rect.top;
    r = rand(0, 100) < 20 ? rand(50, 80) : rand(10, 35);
    // キャンパスの端っこで跳ね返りがループするバグの修正
    if (x - r < 0) x = r;
    if (y - r < 0) y = r;
    if (x + r > canvas.width) x = canvas.width - r;
    if (y + r > canvas.height) y = canvas.height - r;
    balls.push(new Ball(x, y, r));
  });
  Ball = function(x, y, r) {
    // クリックした位置と半径の設定
    this.x = x;
    this.y = y;
    this.r = r;
    // ボールが動く加速度の設定
    this.vx = rand(-10, 10);
    this.vy = rand(-10, 10);
    // ボールの色の設定
    this.color = 'hsla(' + rand(50, 100) + ', ' + rand(40, 80) + '%, ' + rand(50, 60) + '%, ' + Math.random() + ')';
    // ボール表示メソッド
    this.draw = function() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI*2);
      ctx.fillStyle = this.color;
      ctx.closePath();
      ctx.fill();
    };
    // ボール動かすメソッド
    this.move = function() {
      // キャンバスの枠を越えようとした場合、加速度反転
      if (this.x + this.r > canvas.width || this.x - this.r < 0) {
        this.vx *= -1;
      }
      if (this.y + this.r > canvas.height || this.y - this.r < 0) {
        this.vy *= -1;
      }
      this.x += this.vx;
      this.y += this.vy;
    }
  };
  function update() {
    // 0.3秒ごとにアップデートしている
    var i;
    ctx.fillStyle = '#ecf0f1';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (i = 0; i < balls.length; i++) {
      balls[i].draw();
      balls[i].move();
    }
    setTimeout(function() {
      update();
    }, 30);
  }
  update();var canvas;  
}, false)