//ex11_object.js

/*

자바스크립트 객체
1. 내장 객체
    - Array, Date, Math 등..

2. BOM 객체
3. DOM 객체

4. 사용자 정의 객체
    - 클래스를 사용해서 객체를 생성하는 것과 유사 작업

사용자 정의 객체 생성
1. Object 클래스 사용
2. {} : 객체 리터럴(*****)


자바 + 홍길동 객체 생성

자바에서
class User {
    private String name;
    private int age;
    private String address;
}

User hong = new User();
User lee = new User();

자바스클립트에서는 클래스를 못 만듬

*/
//1. Object 클래스 사용
var hong = new Object(); //무소유 순수 객체
hong.name = "홍길동"; //프로퍼티 생성. 멤버 생성
console.log(hong.name);
hong.age = 20;
hong.address = "서울시 강남구";
console.log(hong.age);
console.log(hong.address);
console.log(hong); //{ name: '홍길동', age: 20, address: '서울시 강남구' }

var lee = new Object();
lee.name = "이순신";
lee.age = 30;
lee.address = "부산";
console.log(lee);

//2. {}
//객체 리터럴(이렇게는 잘 안 만듬)
var haha = {}; //new Object()
haha.name = "하하하";
haha.age = 20;
haha.address = "서울시";
console.log(haha);

//객체 리터럴(보통 이렇게 만듬)
var hoho = { name: "호호호", age: 20, address: "서울시" };
console.log(hoho);

//객체 리터럴(가장 많이 쓰임) 가독성이 좋아서
var huhu = {
    name: "후후후", //멤버변수X -> 프로퍼티라 부름
    age: 20,
    address: "서울시",
};
console.log(huhu);

//프로퍼티 접근 방법
console.log(huhu.name); //읽기 - 멤버 접근 연산자
huhu.name = "후후후후후후"; //쓰기

console.log(huhu["name"]); //읽기 - 연관 배열 접근 방법(indexer)

//표기법이 2가지
huhu["gender"] = "남자"; //1. 쓰기
huhu.height = 180; //2. 쓰기

huhu["mobile-number"] = "010"; // '-' 가능한데 쓰지 말것 헷갈림
//huhu.mobile-number = "010" 불가능

console.log(huhu);

//프로퍼티 삭제
delete huhu.gender; //삭제
console.log(huhu);

//향상된 for문
// - 배열, 컬렉션 탐색(X)
// - 객체 프로퍼티 탐색(O)
// - 특정 객체가 가지고 있는 프로퍼티 목록을 탐색하는 제어문
for (var p in huhu) {
    console.log(p);
}

//객체(클래스) 멤버
// 1. 변수
// 2. 메소드

var hong = new Object();
hong.name = "홍길동";
hong.age = 20;

//익명 함수
hong.hello = function () {
    console.log("안녕하세요. 저는" + this.name + "입니다.");
}; //함수를 객체처럼, 데이터처럼 넣음

console.log(hong);
console.log(hong.name);
hong.hello();

var hong = {
    name: "홍길동",
    age: 20,
    hello: function () {
        console.log("안녕~ 저는 " + this.name + "입니다.");
    },
};
hong.hello();

//서울시 강남구 역삼동 20번지
hong.address = "서울시 강남구 역삼동 20번지";

//자바 -> 멤버 변수 -> 다른 클래스 형
// class User {
//     private String name;
//     private Address address;
// }

var hong = {
    name: "홍길동",
    age: 20,
    hello: function () {},
    //address: "서울시 강남구 역삼동 20번지"  따로 따로
    address: {
        sido: "서울시",
        gugun: "강남구",
        dong: "역상동",
        bunji: "20번지",
    },
    job: ["학생", "직장"],
};

//동?
console.log(hong.address);
console.log(hong.address.dong);
console.log(hong["address"]);
console.log(hong["address"]["dong"]);

//직업
console.log(hong.job);
console.log(hong.job[0]); //학생
console.log(hong.job[1]); //직장

//생성자 함수(=클래스 역할)
// - 함수 일종
// - 목적이 객체를 만드는데 사용하는 전용 함수
// - 표기법(대문자 시작, 파스칼 표기) -> 객체를 만들때 쓰는 생성자라 인식

var user = {
    name: "홍길동",
    age: 20,
    hello: function () {},
};

//생성자 함수
function User(name, age) {
    this.name = name;
    this.age = age;
    this.hello = function () {
        console.log(this.name);
        console.log(this.age);
    };
}

var hong = new User("홍길동", 20);
//hong.name= "홍길동"; -> this.name = name; -> this = hong
hong.hello();

var lee = new User("이순신", 30);
//lee.name = "이순신";
lee.hello();

var list = [];
var today = new Date();

//object로 출력됨
console.log(typeof hong);
console.log(typeof lee);
console.log(typeof list);
console.log(typeof today);
console.log("------------------------");
console.clear();

//생성자를 물어봄
console.log(hong.constructor);
console.log(lee.constructor);
console.log(list.constructor);
console.log(today.constructor);

console.log(hong.constructor == lee.constructor); //true
console.log(hong.constructor === list.constructor); //false
