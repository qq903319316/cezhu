$(function(){

	/*状态栏的隐藏*/
var lih=$(".lihover")
xuanxiangka(lih);
function xuanxiangka(obj){
for(var i=0;i<obj.length;i++){
	obj[i].index=i
    obj[i].onmouseover=function(){
 	var div=$("div",obj[this.index])[0]
     div.style.display="block"
 	}
	obj[i].onmouseout=function(){
	var div=$("div",obj[this.index])[0]
	div.style.display="none"
 	}
 }}
    /* 菜单栏的*/
    var span1=$("span",$(".topmenu")[0]);
    
    for(var i=0;i<span1.length;i++){
	span1[i].index=i
    span1[i].onmouseover=function(){ 	
     span1[this.index].style.borderBottom="3px solid #e5004f"
 	}
	span1[i].onmouseout=function(){
	 span1[this.index].style.borderBottom="#fff"
 	}
 }
    // banner图   轮播
    var banner=$(".bannertu")
    var li1=$("li",$(".bdcen")[0])
    var num=0;
    var t=setInterval(mover,2000)
    var bdnav=$(".bdbanner")[0]
    var bdbutton=$(".bdbutton",bdnav)[0];
    var flag2=true;
    //console.log(bdbutton);
    bdnav.onmouseover=function(){
        clearInterval(t);
        bdbutton.style.display="block";   
         }
    bdnav.onmouseout=function(){
        t=setInterval(mover,2000);
        bdbutton.style.display="none";
    }
    function mover(){
        num++; 
        if(num>=banner.length){
        	num=0;
        }     	  	
	    for(var i=0;i<banner.length;i++){
		 animate(banner[i],{opacity:0},function(){
                flag2=true;
             })
         li1[i].style.borderColor="#211616";
	    }
	    animate(banner[num],{opacity:1},function(){
                flag2=true;
             })
        li1[num].style.borderColor="#e5004f";
	 } 
      function movel(){
        num--; 
        if(num<=0){
            num=banner.length-1;
        }           
        for(var i=0;i<banner.length;i++){
         animate(banner[i],{opacity:0})
         li1[i].style.borderColor="#211616";
        }
        animate(banner[num],{opacity:1})
        li1[num].style.borderColor="#e5004f";
     }     

    
//点击轮播
    for(var i=0;i<li1.length;i++){ 
        li1[i].index=i;             
        li1[i].onclick=function(){
            flag2=false;
            for(var j=0;j<li1.length;j++){
             animate(banner[j],{opacity:0},function(){
                flag2=true;
             })
             li1[j].style.borderColor="#211616";
            }
        li1[this.index].style.borderColor="#e5004f";
        animate(banner[this.index],{opacity:1},function(){
                flag2=true;
             });
         num=this.index;      
        }       
    }

    //左右按钮
    var bdbtnl=$(".bdbtnl")[0];
    var bdbtnr=$(".bdbtnr")[0];
    var zhegai=$(".btnzhegai");
    bdbtnl.onclick=function(){

        if(flag2){
            flag2=false;
        movel();}
    }    
    bdbtnr.onclick=function(){
        if(flag2){
            flag2=false;
        mover();}
    }


    // 选项卡
    var allmenu=$(".allmenu")[0];
    var dldl=getChild(allmenu);
    xuanxiangka(dldl);


    //特卖channl1
    var lis2=$("li",$(".bdch_left")[0]);
    var disp2=$(".bd_left1",$(".bdch_left_all")[0]);
    //console.log(lis2);
    //console.log(disp2);
    for(var i=0;i<lis2.length;i++){
    lis2[i].index=i
    lis2[i].onmouseover=function(){
        for(var j=0;j<disp2.length;j++){
          disp2[j].style.display="none";
          lis2[j].style.borderColor="#333333"
          lis2[j].style.fontWeight="normal";

        }
    lis2[this.index].style.borderColor="#e5004f";
    lis2[this.index].style.fontWeight="800";
    disp2[this.index].style.display="block";
    }
    // lis2[i].onmouseout=function(){
    //     lis2[this.index].style.borderColor="#333333";
    // }
 }



      /*外框线*/

        for(var n=0;n<disp2.length;n++){
            disp2[n].index=n
        disp2[n].onmouseover=function(){
        var picborder=$(".bd_left1_left",disp2[this.index]);
        for(var m=0;m<picborder.length;m++){          
          picborder[m].index=m;
          picborder[m].onmouseover=function(){
            var btop=$(".border_top",picborder[this.index])[0];
            var bbottom=$(".border_bottom",picborder[this.index])[0];
            var bleft=$(".border_left",picborder[this.index])[0];
            var bright=$(".border_right",picborder[this.index])[0];
             btop.style.width="220px";
             bbottom.style.width="220px";
             bleft.style.height="260px";
             bright.style.height="260px";
          }
          picborder[m].onmouseout=function(){
            var btop=$(".border_top",picborder[this.index])[0];
            var bbottom=$(".border_bottom",picborder[this.index])[0];
            var bleft=$(".border_left",picborder[this.index])[0];
            var bright=$(".border_right",picborder[this.index])[0];
             btop.style.width="0px";
             bbottom.style.width="0px";
             bleft.style.height="0px";
             bright.style.height="0px";
          }
        }}}

     /*展示区2 channel2*/
     var lis3=$("li",$(".con2_nav")[0])
     var con2_con=$(".con2_con")[0];
     var dislist3=getChild(con2_con);
     for(var i=0;i<lis3.length;i++){
    lis3[i].index=i;
    lis3[i].onmouseover=function(){
        for(var j=0;j<dislist3.length;j++){
          dislist3[j].style.display="none";
          lis3[j].style.borderColor="#333333";
          lis3[j].style.fontWeight="normal";

        }
    lis3[this.index].style.borderColor="#e5004f";
    dislist3[this.index].style.display="block";
    lis3[this.index].style.fontWeight="800";

    }
    // lis3[i].onmouseout=function(){
    //     lis3[this.index].style.borderColor="#333333";
    // }
 }
     /*外框线*/
     xian("li",".con2_con_list2",200,250)
     function xian(obj,rangeobj2,widths,heights){
        var picborder=$(obj,$(rangeobj2)[0]);
        for(var m=0;m<picborder.length;m++){          
          picborder[m].index=m;
          picborder[m].onmouseover=function(){
            var btop=$(".border_top",picborder[this.index])[0];
            var bbottom=$(".border_bottom",picborder[this.index])[0];
            var bleft=$(".border_left",picborder[this.index])[0];
            var bright=$(".border_right",picborder[this.index])[0];
             btop.style.width=widths+"px";
             bbottom.style.width=widths+"px";
             bleft.style.height=heights+"px";
             bright.style.height=heights+"px";
          }
          picborder[m].onmouseout=function(){
            var btop=$(".border_top",picborder[this.index])[0];
            var bbottom=$(".border_bottom",picborder[this.index])[0];
            var bleft=$(".border_left",picborder[this.index])[0];
            var bright=$(".border_right",picborder[this.index])[0];
             btop.style.width="0px";
             bbottom.style.width="0px";
             bleft.style.height="0px";
             bright.style.height="0px";
          }
        }}


/*时尚名品*/
            var  channel3=$(".channel3");
           for(var mm=0;mm<channel3.length;mm++){
               shishang(mm);
               hongkuang(mm);
               xiaolunbo(mm);

           }

          function shishang(shu){
        var rangeobj2=$(".floor_banner_main",$(".channel3")[shu])[0]
        var picborder=$(".fbm_block_border",rangeobj2);
        for(var m=0;m<picborder.length;m++){          
          picborder[m].index=m;
          picborder[m].onmouseover=function(){
            var btop=$(".border_top",picborder[this.index])[0];
            var bbottom=$(".border_bottom",picborder[this.index])[0];
            var bleft=$(".border_left",picborder[this.index])[0];
            var bright=$(".border_right",picborder[this.index])[0];
             btop.style.width=272+"px";
             bbottom.style.width=272+"px";
             bleft.style.height=182+"px";
             bright.style.height=182+"px";
          }
          picborder[m].onmouseout=function(){
            var btop=$(".border_top",picborder[this.index])[0];
            var bbottom=$(".border_bottom",picborder[this.index])[0];
            var bleft=$(".border_left",picborder[this.index])[0];
            var bright=$(".border_right",picborder[this.index])[0];
             btop.style.width="0px";
             bbottom.style.width="0px";
             bleft.style.height="0px";
             bright.style.height="0px";
          }
        }}





          
         
         /*小轮播*/
         function xiaolunbo(shu){
         var tt=setInterval(scroll,1500)

         var scroller1=$(".scroller",$(".channel3")[shu])[0]
         scroller1.onmouseover=function(){
         clearInterval(tt);
         }
         scroller1.onmouseout=function(){
          tt=setInterval(scroll,1500);
          }         
         function scroll(){
         var rangscroll=$(".scroller_cen",$(".channel3")[shu])
        
         var widthscroll=parseInt(getStyle($("img",$(".scroller_cen_dis")[0])[0],"width"))
         for(var j=0;j<=rangscroll.length;j++){
         animate(rangscroll[0],{left:-widthscroll},function(){
         var fchild=firstChild(rangscroll[0])         
          rangscroll[0].appendChild(fchild)
          rangscroll[0].style.left=0;})            
       
            }}}



           
          // if(shu==1||shu==2||shu==4||shu==7){
          //   continue;
          // }
         function hongkuang(shu){
            if(shu==1||shu==2||shu==4||shu==7){return;}
         var  floor_slide=$(".floor_slide",$(".channel3")[shu])
         var fsbtnl=$(".fsbtnl",floor_slide[0])[0]
         var fsbtnr=$(".fsbtnr",floor_slide[0])[0]
         var alist=$("a",floor_slide[0]);
         var awidths=parseInt(getStyle(alist[0],"width"));
         var lilist=$("li",floor_slide[0]);
         var num2=0;
         var next2=0;

         fsbtnl.onclick=function(){
           next2++;
          if(next2>=alist.length){
            next2=0;
          }
            lilist[num2].style.background="#333333";
            lilist[next2].style.background="#e5004f";
            alist[next2].style.left=awidths+"px";
            animate(alist[num2],{left:-awidths})
            animate(alist[next2],{left:0})
             num2=next2;

         }
         fsbtnr.onclick=function(){
           next2--;
          if(next2<0){
            next2=1;
          }
            lilist[num2].style.background="#333333";
            lilist[next2].style.background="#e5004f";
            alist[next2].style.left=-awidths+"px";
            animate(alist[num2],{left:awidths})
            animate(alist[next2],{left:0})
             num2=next2;
         }

}





         //     var scroller1=$(".scroller")[0]
         // scroller1.onmouseover=function(){
         // clearInterval(tt);
         // }
         // scroller1.onmouseout=function(){
         //  tt=setInterval(scroll,1500);
         //  }         
         // function scroll(){
         // var rangscroll=$(".scroller_cen")
        
         // var widthscroll=parseInt(getStyle($("img",$(".scroller_cen_dis")[0])[0],"width"))
         // for(var j=0;j<=rangscroll.length;j++){
         // animate(rangscroll[0],{left:-widthscroll},function(){
         // var fchild=firstChild(rangscroll[0])         
         //  rangscroll[0].appendChild(fchild)
         //  rangscroll[0].style.left=0;})            
       
         //    }}

//分层
    //获取各层到页面的高度
      var floor=$(".channel3");
      var arr=[];
      for(var i=0;i<floor.length;i++){
        arr.push(floor[i].offsetTop)
      }
      //获取到当前可视窗口的高度
      var height=document.documentElement.clientHeight;
      //获取滚动高度
     //进行判断
       var jump=$(".jump")[0];
       var flag1=true;
       var flag=true;


       var jli=$("li",jump);
       var jdiv=$("div",jump);
        for(var i=0;i<jli.length;i++){
            jli[i].index=i;
            jli[i].onclick=function(){
                flag=false;
                for(var j=0;j<jdiv.length;j++){
                 jdiv[j].style.display="none";
                }
            jdiv[this.index].style.display="block";
            animate(document.body,{scrollTop:arr[this.index]},function(){
                flag=true;
            });
            animate(document.documentElement,{scrollTop:arr[this.index]},function(){
                flag=true;
            });
            }
        }
         

         window.onscroll=function(){
        var obj=document.body.scrollTop?document.body:document.documentElement;
        var scrolltop=obj.scrollTop; 
        //隐藏的导航
        if(scrolltop+height>=600){
        if(flag1){
            flag1=false;
         animate(jump,{right:25})
          }
            }else{
                if(!flag1){
                    flag1=true;
                animate(jump,{right:-75})
                }
            }

           //按需加载
                for(var i=0;i<floor.length;i++){
                 if((scrolltop+height)>=arr[i]+200){
                    var imgs=$("img",floor[i])
                    for(var j=0;j<imgs.length;j++){
                        imgs[j].src=imgs[j].getAttribute("imgpath");
                    }
                 }
                }
               



            //按钮变色 
            if(!flag){return}      
        for(var i=0;i<floor.length;i++){
              if(scrolltop+height>=arr[i]+200){
                 for(var j=0;j<jli.length;j++){
                  jdiv[j].style.display="none";
                  }
                  jdiv[i].style.display="block";        
                 }
                }
               
         
      }



       


         

  
































})