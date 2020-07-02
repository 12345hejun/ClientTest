//ex05_function.js

/*

JavaScript Function
- 함수, 메소드

자바 메소드
public [static] int m1(int num) {
    return 10;
}

자바스크립트 함수
function m1(num) {
    return 10;
}
*/

function f1() {
    console.log("f1");
}

f1();
f1();

function f2() {
    //console.log(name);
    console.log(arguments); //내장 배열(유사 배열)
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    console.log(arguments[3]);
}

f2("홍길동", 10, true, new Date());

function f3(name) {
    console.log(name); //undefined: 초기화가 안된 상태
}

f3();

var num;
console.log(num);

var name = null; //의도적으로 null을 만든상태
console.log(name);

//지금은.. 이렇게 생각해도 된다. 같다고
console.log(null == undefined); //약간의 형변환이 발생

//나중엔.. 이렇게 생각해야 한다. 다르다
console.log(null === undefined); //절대 형변환 없음

console.log(100 == "100"); //같다
console.log(100 === "100"); //다르다

console.log(100 != "100");
console.log(100 !== "100");

function f4() {
    return 10;
}

console.log(f4());

f5();

function f5() {
    console.log("f5");
}

//선언문만 맨 위로 끌어 올림, 초기값x
//함수 호이스팅, Function Hoisting
//변수 호이스팅, Variavle Hoisting

//f5();

var m5 = 100;
console.log(m5); //100

console.log(m6); //undefined
var m6 = 100;

/*

자바: 멤버변수 vs 지역변수
    - 클래스 영역 or 메소드 영역 or 제어문 영역

자바스크립트: 전역변수 vs 지역변수
    1. 전역 변수, Global Variable
        - 한페이지안에서 모두 사용 가능한 변수
    2. 지역 변수, Local Variable
        - 블럭(함수)내에서 선언한 변수

*/

var m1 = 100; //전역 변수

console.log(m1);

function c1() {
    console.log(m1); //전역 변수 호출
}
c1();

function c2() {
    var m2 = 200;
    console.log(m2);
} //지역
c2();

//console.log(m2); //에러. 선언을 안함

function c3() {
    if (true) {
        var m3 = 300;
        console.log(m3);
    }
    console.log(m3); //m3의 영역은 if문이 아니라 함수라 가능함
    //자바에서는 불가능함.
}
c3();

//자바스크립트는 var 선언문 없이 변수를 선언할 수 있다.
var nick1 = "강아지"; //전역 변수
nick2 = "고양이"; //전역 변수

function c4() {
    var gender1 = "남자"; //지역변수
    gender2 = "여자"; //전역변수(************).
    //var를 안붙히면 무조건 전역변수
}

c4();

console.log(gender2);
