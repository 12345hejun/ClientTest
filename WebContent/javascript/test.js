function c3() {
    if (true) {
        var m3 = 300;
        console.log(m3);
    }
    console.log(m3); //m3의 영역은 if문이 아니라 함수라 가능함
    //자바에서는 불가능함.
}
c3();
console.log(m3);
