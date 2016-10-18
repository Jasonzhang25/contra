var getPos = function() {
          return {
              x: $("li.active").offset().left + $("li.active").width() / 2,
              y: $("li.active").offset().top + $("li.active").height() / 2
          }
      } 

    function test(){

      $(this).parent().addClass('active').siblings().removeClass('active');

      var pos=getPos();
      var canvas=document.getElementById("canvas");
      var cxt=canvas.getContext("2d");
      //实心三角形
      cxt.beginPath();
      cxt.fillStyle="#e5e5e5";
      //cxt.strokeStyle ='hsl(120,50%,50%)';//填充绿色
      cxt.moveTo(0,100);
      cxt.lineTo(pos.x,pos.y);
      cxt.lineTo(500,100);
      cxt.closePath();
      //cxt.stroke();
      cxt.fill();
      cxt.restore();//返回原始状态
    }

