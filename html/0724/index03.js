//상수 :::힝상 같은 수이며, 선언과 동시에 초기값을 유지
const PI = 3.14;

//변수 :: 선언 +초기화부
let radius = 0;
let area = 0;

// 변수 ::: 구현부
let radius = prompt ( "반지름을 입력하세요.")
let area = PI * radius * radius;

// 출력부
console.log(area);
document.getElementById(area).innerHTML = `${area}`