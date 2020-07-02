//ex09_date.js

//날짜 시간 자료형
// - new Date()
// - object(자료형)

//현재 시각
var now = new Date(); //Calendar.getInstance()
console.log(now); //2020-07-01 T 05:14:50.067Z
console.log(now.toLocaleString()); //2020-7-1 2:17:12 ├F10: PM┤

//c.get(Calendar.YEAR)
console.log(now.getYear()); //120
console.log(now.getFullYear()); //2020
console.log(now.getMonth()); //6(0부터)
console.log(now.getDate()); //1
console.log(now.getDay()); //3(일(0) ~ 토(6))
console.log(now.getHours()); //14
console.log(now.getMinutes()); //19
console.log(now.getSeconds()); //29
console.log(now.getMilliseconds()); //0.577
console.log(now.getTime()); //1593580769577 틱값

//출력
console.log(now); //2020-07-01T05:24:15.158Z
console.log(now.toString()); //Wed Jul 01 2020 14:24:15 GMT+0900 (GMT+09:00)
console.log(now.toLocaleString()); //현재 지역 설정

console.log(now.toLocaleDateString()); //2020-7-1
console.log(now.toLocaleTimeString()); //2:28:54

//특정 시각 만들기
var christmas = new Date();
christmas.setMonth(11); //c.set(Calendar.MONTH, 11); 자바에서
christmas.setDate(25);
console.log(christmas.toString());

var birthday = new Date(1990, 5, 20);
console.log(birthday);

var birthday2 = new Date(1990, 5, 20, 12, 20, 30);
console.log(birthday2);

//연산
console.log(christmas - now); //15292800010

//오늘 + 100일
console.log(now + 100); //안됨 .Wed Jul 01 2020 14:34:45 GMT+0900 (GMT+09:00)100.
//c.add(Calendar.DATE, 100) 자바에서

//틱값으로 계산 해야한다.
var result = new Date();
result.setTime(now.getTime() + 100 * 24 * 60 * 60 * 1000);
console.log(result.toString());
