//选项卡特效
//方法一、
window.onload=function(){
	//先获取元素
	var list=$(".list");
	var item=$(".item");
	for(var i=0;i<list.length;i++){
		/*先执行的循环后执行的事件，所以当触发事件时
		i=4，报错。解决方法：要给每个元素添加属性*/
		list[i].index=i;
		list[i].onmouseover=function(){
			//this指移到哪个元素就是谁
			item[this.index].style.display="block";
		}
		list[i].onmouseout=function(){
			item[this.index].style.display="none";
		}
	}


//方法二
//用let声明变量不受先执行循环再触发事件的影响
/*window.onload=function(){
	var list=$(".list");
	var item=$(".item");
	for(let i=0;i<list.length;i++){
		list[i].onmouseover=function(){
			item[i].style.display="block";
		}
		list[i].onmouseout=function(){
			item[i].style.display="none";
		}
	}
}*/

//方法三
//闭包
/*for(var i=0;i<list.length;i++){
	(function(n){
		list[n].onmouseover=function(){
			item[n].style.display="block";
		}
		list[n].onmouseout=function(){
			item[n].style.display="none";
		}
	})(i)
}*/

//轮播图特效
var win=$(".banner_middle")[0];//窗口
var as=$("a",win);//img
var lis=$("li",$(".point")[0]);
var num=0;//实时监控当前窗口中显示图片的下标

var btnl=$(".btnl")[0];
var btnr=$(".btnr")[0];
//初始化状态 第一张图片层级调高
//as[0].style.zIndex=10;
animate(as[0],{opacity:1});

//鼠标移上去停止，离开继续
var t=setInterval(moveR,2000);
win.onmouseover=function(){
	clearInterval(t);
};
win.onmouseout=function(){
	t=setInterval(moveR,2000);
};

//点点点变图
for (var i = 0; i < lis.length; i++) {
	lis[i].index=i;
	lis[i].onclick=function(){
		if (num==this.index) {
			return;
		};
        for (var j = 0; j < as.length; j++) {
    	//as[j].style.zIndex=5;
    	animate(as[j],{opacity:0});
    	lis[j].className="";
    };


		lis[this.index].className="hot";
		//as[this.index].style.zIndex=10;
		animate(as[this.index],{opacity:1});
		num=this.index;
	}
};


//点左右小框换图
var flag=true;
btnl.onclick=function(){
	if (flag) {
		flag=false;
		moveL();};
	
};
btnr.onclick=function(){
	if (flag) {
		flag=false;
		moveR();};
	
};







function moveR(){
    num++;
    if (num==as.length) {num=0};
    //所有图片层级降低，当前图片层级调高
    for (var i = 0; i < as.length; i++) {
    	//as[i].style.zIndex=5;
    	animate(as[i],{opacity:0});
    	lis[i].className="";
    };
    //as[num].style.zIndex=10;
    animate(as[num],{opacity:1},function(){
    	flag=true;
    });
    lis[num].className="hot";
}
function moveL(){
    num--;
    if (num<0) {num=as.length-1};
    //所有图片层级降低，当前图片层级调高
    for (var i = 0; i< as.length; i++) {
    	//as[i].style.zIndex=5;
    	animate(as[i],{opacity:0});
    	lis[i].className="";
    };
    //as[num].style.zIndex=10;
    animate(as[num],{opacity:1},function(){
    	flag=true;
    });
    lis[num].className="hot";
}







}