//顶部导航选择页效果
 var topxzy=$(".topxzy");
 var topxzys=$(".topxzys");
 var topa=$(".topa");
 //alert(topxzys.length);
 for (var i = 0; i < topxzy.length; i++) { 	
 	topxzy[i].index=i;
 	hover(topxzy[i],function(){
 		for(var j=0;j<topxzys.length;j++){
 			topxzys[j].style.display="none";
 			topxzy[j].style.background="#f2f2f2";
 			topa[j].style.color="#999999";
 			topa[j].style.textDecoration="none";

 		}
 	topxzys[this.index].style.display="block";
 	topxzy[this.index].style.background="#fff";
 	topa[this.index].style.color="red";
 	topa[this.index].style.textDecoration="underline";
 	},function(){
 		for(var j=0;j<topxzys.length;j++){
 			topxzys[j].style.display="none";
 			topxzy[j].style.background="#f2f2f2";
 			topa[j].style.color="#999999";
 			topa[j].style.textDecoration="none";
 		}
 	})
 }
// 图片轮播效果
 var lunbotu=getClass("lunbotu");
 var lunbo=getClass("lunbo");
 var lunbodian=getClass("lunbodian");
 var left=getClass("leftxuanze")[0];
 var right=getClass("rightxuanze")[0];
 var sidebartwo=$(".sidebartwo");
 // alert(lunbotu.length);
 var num=0;
 function move(lr){
 	if(lr==1){
 		num++;
 		if(num>=6){
 			num=0;
 		}
 	}else if(lr==0){
 		num--;
 		if(num<=-1){
 			num=5;
 		}
 	}	
 	for (var i = 0; i < lunbotu.length; i++) {
 		lunbotu[i].style.opacity="0";
 		lunbo[i].style.opacity="0";
 		lunbodian[i].style.background="#000";
 	}
	 	 		
 	animate(lunbotu[num],{opacity:1},1500,Tween.Quart.easeOut);
 	lunbo[num].style.opacity="1";
 	lunbodian[num].style.background="red";
 	// lunbotu[num].style.opacity="1";
 }
 var lunbot=setInterval(function(){
 	move(1);
 },2000);
//移入移除时间

 for (var i = 0; i < lunbo.length; i++) {
 	hover(lunbo[i],function(){
 		clearInterval(lunbot);
 		left.style.opacity=0.6;
		right.style.opacity=0.6;
 	},function(){
 		lunbot=setInterval(function(){
 			move(1);
 		},2000);
 		left.style.opacity=0;
		right.style.opacity=0;
 	})
	// lunbotu[i].onmouseover=function(){
	// 	clearInterval(lunbot);
	// 	left.style.opacity=0.6;
	// 	right.style.opacity=0.6;
	// }
	// lunbotu[i].onmouseout=function(){
	// 	lunbot=setInterval(function(){
 // 			move(1);
 // 	},2000);
	// 	left.style.opacity=0;
	// 	right.style.opacity=0;
	// }
 }
//小圆点事件
 for (var i = 0; i < lunbodian.length; i++) {
 	lunbodian[i].dian=i;
 	lunbodian[i].onmouseover=function(){
 		this.style.cursor="pointer";
 		clearInterval(lunbot);
 		for (var j = 0; j < lunbotu.length; j++) {
 			lunbotu[j].style.opacity="0";
 			lunbo[j].style.opacity="0";
 			lunbodian[j].style.background="#000";
 		}
 		// lunbotu[this.dian].style.opacity="1";
 		animate(lunbotu[this.dian],{opacity:1},1500,Tween.Quart.easeOut);
 		lunbo[this.dian].style.opacity="1";
 		lunbodian[this.dian].style.background="red";
 		num=this.dian;
 	}
 	lunbodian[i].onmouseout=function(){
 		lunbot=setInterval(function(){
 			move(1);
 		},2000);
 	}
 }
 //左右点击事件
 right.onclick=function(){
 	move(1);
 }
 left.onclick=function(){
 	move(0);
 }

//侧导航选择页效果
 var sidebar1=getClass("sidebar1");
 var sidebarxz=$(".sidebarxz");
 var sidebaronebox=$(".sidebaronebox")[0];
 var sidebar1=$(".sidebar1");
 var colors=["#b35474","#6785e3","#5d538f","#b97a8f","#5f4cbf","#678ace","#f7616c","#ecb855","#ecb855","#b35474","#6785e3","#5d538f","#b97a8f","#5f4cbf","#678ace","#f7616c"];
 // alert(title.length);
 // alert(sidebarxz.length);
 for (var i = 0; i < sidebar1.length; i++) {
	sidebar1[i].index=i;
	sidebar1[i].onmouseover=function(){
		for (var j = 0; j < sidebar1.length; j++) {
			sidebar1[j].style.background="none";
			sidebarxz[j].style.zIndex="0";
			sidebar1[j].style.color="black";
			// alert(j);
		}	
	this.style.background="#fff";
	sidebar1[this.index].style.color=colors[this.index];
	sidebarxz[this.index].style.zIndex="5";
	}
 }
 hover(sidebaronebox,function(){

 },function(){
 	for (var i = 0; i < sidebarxz.length; i++) {
 		sidebarxz[i].style.zIndex="0";
 		sidebar1[i].style.background="#ededed";
 		sidebar1[i].style.color="black";
 	};
 })
//顶部和左侧固定栏隐藏效果
	var gudingtop=$(".gudingtop")[0];
	var gudingleft=$(".gudingleft")[0];
	var gudinglefta=$(".gudinglefta");
	var gudingleftb=$(".gudingleftb")[0];
	var qzsgbox=$(".qzsgbox");
	var now;
	//alert(qzsgbox.length);
	var	arrcolor=["#f7a945","#64c36c","#f15453","#64c333","#0aa6e8","#ea5f8d","#f30e75","#000"]
	var flag=true;
	var flag2=true;
 // alert(gudingleft);
 window.onscroll=function(){
	var tops=document.body.scrollTop?document.body.scrollTop:document.documentElement.scrollTop;
	// document.title=tops;
	//顶部固定栏隐藏
	if(tops>=300){
		// gudingtop.style.top="0";
		if(flag){
			animate(gudingtop,{top:0},300);
			flag=false;
			flag2=true;
		}		
	}else{
		// gudingtop.style.top="-50px";
		if(flag2){
			animate(gudingtop,{top:-50},300);
			flag2=false;
			flag=true;
		}		
	}
	//左侧固定栏显示及隐藏
	if(tops>=1450){
		gudingleft.style.display="block";
	}else{
		gudingleft.style.display="none";
	}
	//导航颜色随着滚动轴的移动而变化
	for (var i = 0; i < gudinglefta.length; i++) {
		if(qzsgbox[i].offsetTop<=tops+250){
			for(var j=0;j<qzsgbox.length;j++){
				gudinglefta[j].style.background="#5d6361";
			}
			gudinglefta[i].style.background=arrcolor[i];
			now=i;	
		}				
	}
//图片的按需加载
 var imgsjz=$(".imgsjz");
	 var obj=document.body.scrollTop?document.body:document.documentElement;
	 var tops=obj.scrollTop;
	 var ch=document.documentElement.clientHeight;
	 for (var i = 0; i < imgsjz.length; i++) {
	 	if(imgsjz[i].offsetTop<=ch+tops){
	 	var imgs=$("img",imgsjz[i]);
	 		for(var j=0;j<imgs.length;j++){
	 			var src=imgs[j].getAttribute("date-src");
	 			imgs[j].src=src;
	 		}
	 	}
	 }
 }
 //点击事件
 document.body.scrollTop=1;
 var obj=document.body.scrollTop?document.body:document.documentElement;
 for (var i = 0; i < gudinglefta.length; i++) {
 	gudinglefta[i].index=i;
 	gudinglefta[i].onclick=function(){
 		// obj.scrollTop=qzsgbox[this.index].offsetTop;
 		animate(obj,{scrollTop:qzsgbox[this.index].offsetTop-150},400,Tween.Linear);
 		now=this.index;
 	}
 	gudingleftb.onclick=function(){
 		animate(obj,{scrollTop:0},400,Tween.Linear);
 	}
 	//鼠标划动效果
 	gudinglefta[i].onmouseover=function(){
 		for(var j=0;j<gudinglefta.length;j++){
 			if(j!=now){
 				gudinglefta[j].style.background="#5d6361";
 			} 			
 		}
 		gudinglefta[this.index].style.background=arrcolor[this.index];	
 	}
 	gudinglefta[i].onmouseout=function(){
 		for(var j=0;j<gudinglefta.length;j++){
 			if(j!=now){
 				gudinglefta[j].style.background="#5d6361";
 			} 			
 		}
 	}
 }
//热门品牌部分遮盖
 var rmtufugai=getClass("rmtufugai");
 var rmfugaibig=getClass("rmfugaibig");
 for (var i = 0; i < rmfugaibig.length; i++) {
 	rmfugaibig[i].aa=i;
 	rmfugaibig[i].onmouseover=function(){
 		for (var j = 0; j < rmtufugai.length; j++) {
 			rmtufugai[j].style.display="none";
 		}
 		rmtufugai[this.aa].style.display="block";
 	}
 	rmfugaibig[i].onmouseout=function(){
 		for (var i = 0; i < rmtufugai.length; i++) {
 			rmtufugai[i].style.display="none";
 		};
 	}
 }
 var rmtufugai2=getClass("rmtufugai2");
 var remenyuantu2=getClass("remenyuantu2");
 var rementu2=$(".rementu2")[0];
 var rmfugaizi=$("a",rementu2);
 // alert(rmfugaizi.length)
 for (var i = 0; i < remenyuantu2.length; i++) {
 	remenyuantu2[i].index=i;
 	// alert(this.index);
 	remenyuantu2[i].onmouseover=function(){
 		for(var j=0;j<rmtufugai2.length;j++){
 			rmtufugai2[j].style.display="none";
 			rmfugaizi[j].style.color="black";
 		}
 	rmtufugai2[this.index].style.display="block";
 	rmfugaizi[this.index].style.color="red";
 	}
 	remenyuantu2[i].onmouseout=function(){
 		for(var j=0;j<rmtufugai2.length;j++){
 			rmtufugai2[j].style.display="none";
 			rmfugaizi[j].style.color="black";
 		}
 	}
 }
//内容导航部分鼠标划过效果
 var nav5=$(".nav5");
 var navtu2=$(".navtu2");
 for (var i = 0; i < nav5.length; i++) {
 	nav5[i].index=i;
 	nav5[i].onmouseover=function(){
 		for(var j=0;j<navtu2.length;j++){
 			navtu2[j].style.top=0;
 		}
 		// navtu2[this.index].style.top=-9+"px";
 		animate(navtu2[this.index],{top:-9},150);
 	}
 	nav5[i].onmouseout=function(){
 		//navtu2[i].style.top=0;
 		animate(navtu2[this.index],{top:0},150);
 	}
 }
//旗舰店部分遮罩效果
 var qjdbufen3=$(".qjdbufen3");
 var qjdzhezhao=$(".qjdzhezhao");
 //alert(qjdzhezhao.length)
 for (var i = 0; i < qjdbufen3.length; i++) {
 	qjdbufen3[i].index=i;
 	qjdbufen3[i].onmouseover=function(){
	 	for (var j = 0; j < qjdbufen3.length; j++) {
	 		qjdzhezhao[j].style.display="none";
	 	}
 	qjdzhezhao[this.index].style.display="block";
 	}
 	qjdbufen3[i].onmouseout=function(){
 		qjdzhezhao[this.index].style.display="none";
 	}
 }
//猜你喜欢部分遮罩效果
 var cnxhbufen=$(".cnxhbufen");
 for (var i = 0; i < cnxhbufen.length; i++) {
 	cnxhbufen[i].index=i;
 	var cnxhzhezhao=document.createElement("div");
 	cnxhzhezhao.className="cnxhzhezhao";
 	cnxhbufen[i].appendChild(cnxhzhezhao);
 	var cnxhzhezhao=$(".cnxhzhezhao");
 	cnxhbufen[i].onmouseover=function(){
 		for(var j=0;j<cnxhzhezhao.length;j++){
 			cnxhzhezhao[j].style.display="none";
 		}
 	cnxhzhezhao[this.index].style.display="block";
 	}
 }
 
 //alert(cnxhzhezhao.length);
//右侧固定栏窗口效果
 var fixedtxs=$(".fixedtxs");
 var fixedtx=$(".fixedtx");
 for (var i = 0; i < fixedtxs.length; i++) {
 	fixedtxs[i].index=i;
 	fixedtxs[i].onmouseover=function(){
 		for(var j=0;j<fixedtx.length;j++){
 			fixedtx[j].style.display="none";
 			fixedtx[j].style.left="-150px";
 		}
 	fixedtx[this.index].style.display="block";
 	animate(fixedtx[this.index],{left:-90},200);
 	}
 	fixedtxs[i].onmouseout=function(){
 		for(var j=0;j<fixedtx.length;j++){
 			fixedtx[j].style.display="none";
 			animate(fixedtx[this.index],{left:-150},200);
 		}
 	}
 }

 


