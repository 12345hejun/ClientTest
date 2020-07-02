//ex07_casting.js

//형변환
// - 대부분 상황에서는 자바스크립트가 스스로 형변환 한다.

console.log("100" * 2);

//형변환 함수
// "100" -> 100
// (int)num

//1. int parseInt(). 정수로 바꿔서 리턴
//2. float parseFloat(). 실수로 바꿔서 리턴

var n1 = 3.14;
console.log(parseInt(n1));

var n2 = "100";
console.log(parseInt(n2));
console.log(typeof n2); //string
console.log(typeof parseInt(n2)); //number

//문자가 만나기전 까지 자동으로 숫자 추출
var n3 = "200점";
console.log(parseInt(n3)); //200

//시작 부터 추출할게 없음
n3 = "점수200";
console.log(parseInt(n3)); //NaN. 숫자가 아니다

//+전까지 추출
n3 = "100+200";
console.log(parseInt(n3)); //100

//HTMl + CSS 사용할때
var width = "200px"; //parseInt 쓰면 px전 까지 추출
console.log(width + 200); //200px200
console.log(parseInt(width) + 200); //400

console.log(parseFloat("1.5em") * 2 + "em");

//isNaN()
// - Is not a number?
// - 자료형(X) - 형식(O). 숫자형태
var age = "20"; //사용자 입력값

// 숫자 유효성 검사
if (!isNaN(age)) {
    console.log(age);
} else {
    console.log("숫자만 입력하세요");
}
