window.onload= function(){




    $('.shang').click(function(){
        $('.zuo').addClass('aaa');
        $('.you').addClass('aaa');
        $(".shang").css( "display","none")

        var box=document.getElementsByClassName("hezi")[0];
        var clientW=document.documentElement.clientWidth;
        var clientH=document.documentElement.clientHeight;
        document.onmousedown=function(e){
            var startx= e.clientX;
            var starty= e.clientY;
            document.onmousemove=function(e){
                var movex= e.clientX;
                var movey= e.clientY;

                var endx= movex-clientW/2;
                var endy=movey-clientH/2;

                var mo=Math.sqrt(endx*endx+endy*endy);
                var x=endx/mo;
                var y=endy/mo;

                var a=(Math.atan2(x,y)*180/Math.PI);
                x=Math.abs(x);
                y=Math.abs(y);

                var angle=Math.abs(movex-startx)>Math.abs(movey-starty)?Math.abs(movex-startx):Math.abs(movey-starty);
                if(a>=0&&a<90){
                    y=-y;
                    angle=-angle;
                }
                if(a<0&&a>=-90){
                    y=-y;
                    x=-x;
                }
                if(a>=-180&&a<-90){
                    x=-x;
                    angle=-angle;
                }
                box.style.transform="rotate3d("+x+","+y+","+0+","+angle+"deg)";
                e.preventDefault();
            }

            document.onmouseup=function(){
                document.onmousemove=null;
                document.onmouseoup=null;
            }
        }

    })



}
