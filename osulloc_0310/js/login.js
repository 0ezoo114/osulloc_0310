'use strict';

let htmlL=document.querySelector('.htmlL');
let loginCon=document.querySelector('.login-con');
let closeBtn=document.querySelector('.close');

htmlL.addEventListener('click',()=>{
    loginCon.classList.add('on2on');
});
closeBtn.addEventListener('click',()=>{
   loginCon.classList.remove('on2on'); 
});
