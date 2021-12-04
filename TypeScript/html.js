var 제목 = document.querySelector('#title');
if (제목 != null) {
    제목.innerHTML = '반가워요';
}
// if(제목 instanceof Element){
//     제목.innerHTML = '반가워요'
// }
// let 제목 = document.querySelector('#title') as Element
// 제목.innerHTML = '반가워요'
// if(제목?.innerHTML != undefined){
//     제목.innerHTML = '반가워요'
// }
var 링크 = document.querySelector('.link');
// a 태그의 경우
if (링크 instanceof HTMLAnchorElement) {
    링크.href = 'https://kakao.com';
}
var 버튼 = document.querySelector('#button');
버튼 === null || 버튼 === void 0 ? void 0 : 버튼.addEventListener('click', function () {
});
var 이미지 = document.querySelector('#image');
if (이미지 instanceof HTMLImageElement) {
    이미지.src = 'test2.jpg';
}
var 네이버 = document.querySelectorAll('.naver');
네이버.forEach(function (a) {
    if (a instanceof HTMLAnchorElement) {
        a.href = 'https://kakao.com';
    }
});
