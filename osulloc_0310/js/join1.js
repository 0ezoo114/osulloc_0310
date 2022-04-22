'use strict';

let joinBtn = document.getElementById('joinBtn');
joinBtn.addEventListener('click', joinFunc);

function joinFunc() {
    let joinForm = document.getElementById('joinForm');
    let userPw = document.getElementById('userPw');
    let userEmail = document.getElementById('userEmail');

    if (userEmail.value == null || userEmail.value.length <= 0 || userEmail.value.length>10) {
        alert('이메일 다시 입력');
        userEmail.focus();
        return;
    }

    if (userPw.value == null || userPw.value.length <= 0 || userPw.value.length < 6) {
        alert('비빌번호 다시 입력');
        userPw.focus();
        return;
    }
    alert('회원가입 실행');

    joinBtn.submit();

}
