// function $(selector,father){
//    //给父容器设置默认值
//    father=father||document;
//    //对selector做判断
//    if(typeof selector=="string"){
//       //去除字符串左右的空格
//       selector=selector.replace(/^\s*|\s*$/g,"");
//       if(selector.charAt(0)=="."){//class名
//         return getClass(selector.slice(1),father);
//       }else if(selector.charAt(0)=="#"){//id名
//         return father.getElementById(selector.slice(1));
//       }else if(/^[a-zA-Z1-6]{1,6}$/.test(selector)){//标签名
//         return father.getElementsByTagName(selector);
//       }
//    }else if(typeof selector=="function"){
//     //是一个函数时执行window.onload时间
//       window.onload=function(){
//         selector();
//       }
//    }
//  }
//  function getFirst(father){
//   return getChild(father)[0];
// } 


// function getChild(father){
//  var all=father.childNodes;
//   var arr=[];
//   for(var i=0; i<all.length;i++){
//     if(all[i].nodeType==1 || (all[i].nodeValue.replace(/^\s*|\s*$/g,"")!="" && all[i].nodeType==3)){
// //如果节点类型是1的话，是元素节点,放入新数组  或者 正则去除空格，如果没有空格的话，就留下，并且保证文本内容没有注释
//       arr.push(all[i]);
// }
// }
//  return arr;
// }


window.onload=function(){
  var win=$(".win")[0];
  var imgBox=$(".imgBox")[0];
  var as=$("a",imgBox);
  var widths=parseInt(getStyle(as[0],"width"))+10;

  /*
  设置imgBox的宽度
  */
  imgBox.style.width=widths*as.length+"px";

  var t=setInterval(moveL,1000);
  /*
     1，先移动imgBox
     2，把第一张图片放到最后
  */
  function moveL(){
         animate(imgBox,{left:-widths},function(){
         for (var i = 0; i < 2; i++) {
         
         }
          var first=getFirst(imgBox);
          imgBox.appendChild(first);
          imgBox.style.left=0;
         })
  }



  //右边是先巴图后动画
  // 1，把最后一张图片插入到最前面(imgBox.style.left=-widths)
  // 2，移动imgBox()
    
    // function moveR(){
    //  var last=lastChild(imgBox);
    //  beforeChild(imgBox,last);
    //  imgBox.style.left=-widths+"px";
    // }

}