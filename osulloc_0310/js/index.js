'use strict';

let gallery=$('.gallery');
let galleryLi=$('.gallery>ul>li');
let itemsLi=$('.items>ul>li');
let arrBg=[];
let arrowTop=$('span.arrowTop');
// 배열 이용해서 배경이미지를 galleryLi;
for(let i=0;i<galleryLi.length; i++){
    arrBg.push('url(img/sec'+i+'.jpg)no-repeat 50% / cover')
    galleryLi.eq(i).css({'background':arrBg[i]});
}
//////////자동 갤러리 /////////////////
let i = 0;
function autojQueryGallery(){
    if(i>=galleryLi.length-1)i=-1;
    i++;
    goGallery(i);
    if(i>=galleryLi.length-1) i=-1;
}let setIn=setInterval(autojQueryGallery, 3000);
itemsLi.on('click',function(){
    let _this=$(this); let _this_index= _this.index();
    goGallery(_this_index);
    i=_this_index;
}); let hoverClass=$('.hoverClass');
hoverClass.hover(
    function(){clearInterval(setIn);    },
    function(){setIn=setInterval(autojQueryGallery,3000);   }
); // spanArrow.eq(0)->클릭하면 왼쪽으로 이동 // spanArrow.eq(1)-> 클릭하면 오른쪽으로 이동
let spanArrow =$('span.arrow');
spanArrow.on('click',function(){
    let _this=$(this);  let _this_index=$(this).index();
    if(_this_index==0){ //왼쪽
          if(i<=0) i=galleryLi.length;i--;
  
    }else{ //오른쪽
    if(i>=galleryLi.length-1)i=-1;i++;
    }goGallery(i);
});
function goGallery(i){
    let gab=galleryLi.eq(1).offset().left -galleryLi.eq(0).offset().left;
    let goTo=(-gab*i)+'px';
    gallery.stop().delay(0).animate({left:goTo},700);
    itemsLi.eq(i).addClass('on').siblings().removeClass('on');
}
$(window).on('scroll',function(){
   let header=$('.header');
   let docTop=$(document).scrollTop();
    console.log(1,docTop)
   if(docTop>=70){
      header.css({'background':'#94a89d88'});
      arrowTop.fadeIn();
   }else{     
       header.css({'background':'#0000'});
      arrowTop.fadeOut();}
       
       let sec1=$('.section.sec1');
       let sec2=$('.section.sec2');
       let sec3=$('.section.sec3');
       let sec4=$('.section.sec4');

       
       let sec1Top=sec1.offset().top;
       let sec2Top=sec2.offset().top;
       let sec3Top=sec3.offset().top;
       let sec4Top=sec4.offset().top;

       let winHeight=window.innerHeight;
    
       if(docTop>=(winHeight*0.1) ){
            console.log(2,docTop)

           sec2.find('.con').stop().animate({bottom:'25%',opacity:'1'},300);
       }else{
           sec2.find('.con').stop().animate({bottom:'-100%',opacity:'0'},100);
       }
       
       
   });
arrowTop.on('click',function(){
   $('html').animate({scrollTop:'0'})
});

let gnbmenu=$('.gnb-menu');
let rightMenu=$('.right-menu');
let item=$('.item');
let itemjc=$('.item.jc');

let key=true;
gnbmenu.on('click',function(){
    
    console.log('dd')
    let _this=$(this);
    _this.toggleClass('menuOn');
    if(key){

        rightMenu.stop().animate({right:'0'},400,()=>{
            
            item.eq(0).fadeIn(500,()=>{
                item.eq(1).fadeIn(500,()=>{
                     item.eq(2).fadeIn(500,()=>{
                         item.eq(3).fadeIn(500);
                     });
                });
                 
            });
            
        });
          
        key=false;
    }else{
        item.eq(3).fadeOut(400);
        item.eq(2).fadeOut(700);
        item.eq(1).fadeOut(1000);
        item.eq(0).fadeOut(1300,function(){
            rightMenu.stop().animate({right:'-100%'},400);
        });
        key=true;
    }
});

