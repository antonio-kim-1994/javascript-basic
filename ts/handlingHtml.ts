let title = document.querySelector('#title');
// narrowing 방법 1
// if (title != null){
//     title.innerHTML = '반가워요'
// }

// narrowing 방법 2
// if (title instanceof Element){
//     title.innerHTML = '반가워요'
// }

// optional chaning
// object에 ?. 붙이기
// 1. title에 innerHTML이 있으면 출력
// 2. 없으면 undefined 출력
if (title?.innerHTML != undefined){
    title.innerHTML = '반가워요'
}

let link = document.querySelector('.link');
if (link instanceof HTMLAnchorElement){
    link.href = 'https://kakao.com'
}

let button = document.querySelector('#button');
button?.addEventListener('click', function(){
    console.log('hello')
})

let naverToKakao = document.querySelectorAll('.naver');

naverToKakao.forEach((a) => {
    if (a instanceof HTMLAnchorElement){
        a.href = 'https://kakao.com'
    }
})