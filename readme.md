# 0828

복습: No
복습: 1일 전, 진행중
열: 1
유형: gymProject2020
작성일시: 2020년 8월 28일 오전 11:17

![0828%20c97e39cc4dea4db6a89b7ad901878337/Untitled.png](0828%20c97e39cc4dea4db6a89b7ad901878337/Untitled.png)

---

- 구현해야 할 기능
    - [ ]  Table header에 이름/ 나이/ 납부 여부/ 달 별로 날짜/ 출석 항목을 삽입해야 한다.

---

- 문제점
    - [x]  JS로 테이블을 어떻게 만들지?
        - [x]  element를 어떻게 만들지?
            - document.createElement(td,tr,table) , 변수 선언, element.append
            - [x]  열이 34갠데 이걸 노가다를 할거야?  (4시간)
                - [x]  반복문 for 사용 하자
                - [x]  행,열 만드는 메서드 insertRow,insertCell 사용해보자

                    [0828 - for 문](https://www.notion.so/0828-for-74a91a06f03642e5b0a7075f5cf0b948)

                    [0829 - for 문](https://www.notion.so/0829-for-535df42891d94f48a7073ca2b26cc78a)

    ---

    - [x]  각 달마다 날짜 수를 어떻게 저장하지?
        - 윤년/ 평년으로 나눠서 array를 만들자

        ---

    - [x]  array에서 각 달에 맞는 날짜를 어떻게 뽑을거야?
        - [x]  각 달의 날짜가 들어간 array 선언하고,  arrayName[n월달]; 로 날짜를 뽑는다.
        - [x]  윤년,평년을 어떻게 구분하지?

            윤년 조건이 뭔데? ( 4로 나눠 떨어지는 년도 윤년, 400으로 나눠 떨어지는 년도 윤년, 100으로 나눠 떨어지는 년도 평년)

            [0829 - for loop, operators](https://www.notion.so/0829-for-loop-operators-5e5a9ac710ff4312a31a3c3a7114ae70)

        ---

    - [ ]  날짜를 table 특정 행,열에 어떻게 찍어 주지?
        - [ ]  특정 행,열을 어떻게 선택하지?
        - [ ]  특정 행,열 (element)에 value를 어떻게 넣지?

             -element.innerHTML 로 가능할 거 같아.