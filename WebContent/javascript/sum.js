/*
[07/02]











● 

● 마우스 관련 +(ex15_event_mouse)


BOM
window
    - screen
    - location
    - history
    - document
        - image
        - radio
        - form
            - text
            - radio
                - option
            - select
            - file
            - button
            
● window +(ex17_window)
    - 창 열기
        window.open("URL", "name", "option")
            name = 새창을 중복해서 띄울건지, name 있으면 1번만, 없으면 계속
            var child = window.open("http://naver.com", "naver", "width=300, height=300");
    - 창 닫기
        window.close(); //자기를 닫을려면
        child.close(); //열린 창 닫기


●  screen +(ex18_screen)
    - 사용가능한 너비, 높이( - 작업표시줄 )
        console.log(window.screen.availWidth); //***
        console.log(window.screen.availHeight); //***

    - landscape-primary(가로비율-주모니터)
        console.log(window.screen.orientation); //*


● location +(ex19_location)
    - 브라우저의 현재 주소값에 관련된 행동
    - 자바스클립트을 사용한 페이지 이동하기(*****)
        location.href = "https://www.naver.com";
    -서버로부터 새롭게(초기상태) 받아와라 +(ex21_three)
        은행이나 공공장소는 100% 지워지게 location.href 사용, 보안 때문에


● history +(ex20_history)
    - 뒤로가기
        history.back(); 
        history.go(-2); //몇단계 이동
    - 앞으로 가기
        history.forward();
        history.go(2);
    - 페이지 이동이 아니라 타임머신 같은거 +(ex21_three)
        이전 기입한 내용이 그대로 있음


● 그 외
    - window 생략 가능 +(ex20_history, 20)

    - form이 없으면 중간 객체로 -> all(form 역할을 대신해줌) +(ex19_location, 27) 
        var url = window.document.all.txtURL.value;

    - url.startsWith("http://") +(ex19_location, 30)

    - opener: 부모창의 window 객체 +(ex17_child, 25)
        opener.document.form2.txtID.value = window.document.form1.txtID.value;

● 

● 

● 

● 

● 

● 

● 

● 

● 




*/
