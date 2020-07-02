// ex08_string.js;

//문자열 함수
var txt = "Hello~ Hong~ Hong~";

//1. 문자열 길이
console.log(txt.length); //프로퍼티(Property)

//2. 검색
// - indexOf()
// - lastIndexOf()
console.log(txt.indexOf("~")); //5
console.log(txt.indexOf("~", 6));
console.log(txt.indexOf("?")); //-1
console.log(txt.lastIndexOf("~"));

//3. 대소문자 변환
console.log(txt.toUpperCase());
console.log(txt.toLocaleLowerCase());

//4. 치환
// - 처음 만나는 요소만 치환(반복X)
// - 정규 표현식을 사용하면 반복 가능
console.log(txt.replace("Hong", "홍길동")); //Hello~ 홍길동~ Hong~
console.log(txt.replace(/Hong/gi, "홍길동")); //Hello~ 홍길동~ 홍길동~

//5. 범위 추출
console.log(txt.substring(2, 8)); //2~7까지 -> llo~ H
console.log(txt.substring(2)); //2번째부터 끝까지 -> llo~ Hong~ Hong~

console.log(txt.substr(2, 8)); //2번째 부터 8글자를 뽑아와라 -> llo~ Hon
console.log(txt.substr(2)); //2번째 부터 끝까지 -> llo~ Hong~ Hong~

//6. 공백제거
console.log("    하나    둘    ".trim()); //하나    둘

//7. 분할
var result = "홍길동,아무게,하하하,호호호".split(",");
console.log(typeof result); //object
console.log(result[0]); //홍길동
console.log(result[3]); //호호호
//[ '홍길동', '아무게', '하하하', '호호호' ]

console.log(txt.charAt(1)); //위치지정 후 문자추출. -> e
console.log(txt.charCodeAt(1)); //문자코드로 반환 -> 101

console.log(txt.startsWith("Hello")); //시작이 Hello으로 -> true
console.log(txt.startsWith("홍")); //시작이 '홍'으로 ->false

console.log(txt.endsWith("~")); //끝이 ~으로 -> true

console.log(txt.bold()); //<b>Hello~ Hong~ Hong~</b>. 잘 안쓰임
