## 🎶 Music-Charts

## 0. 컴포넌트 
- input과 button, TopBar를 공통컴포넌트로 만들어 사용하였습니다.

## 1. JSON 데이터 불러오기
- axios를 사용하여 JSON 데이터를 가져와 사용하였습니다. (data.feed.entry)
- 불러온 데이터를 state에 저장 후 map을 이용하여 화면에 나타날 수 있게 하였습니다. 

## 2. 음원 이름 검색 / 오름정렬과 내림정렬
- 검색창에 입력된 값이 JSON으로 불러온 배열의 ["im:name"]에 포함된다면 해당값(배열)을 state에 저장한 후, 화면에 나타날 수 있게 하였습니다.
- 대소문자 구분없이 검색하기 위해 toLowerCase() method 와 포함 여부를 확인하기 위해 indexOf method를 사용하였습니다.
- 검색 내용이 없다면 Modal로 검색 내용 없음을 표시하였습니다.
- 오름차순/내림차순 버튼을 클릭할 경우, sort method를 활용하여 오름/내림 차이를 비교하였습니다.
![검색,정렬](https://user-images.githubusercontent.com/114847858/232559483-ae8797eb-958e-45b8-96b0-6c8c9bd62d86.gif)

## 4. 상세페이지 이동
- const router = useRouter() 를 활용하여, 차트 클릭시 id.attributes["im:id"] 값을 기준으로 상세페이지로 이동하였습니다.
- router.query.musicid와 id.attributes["im:id"]가 같은 배열값만 result에 저장하여 화면에 표기하였습니다.
- router.push() 함수를 컴포넌트도 만들어 사용하였습니다. ( onClickMoveToPage )

![상세페이지](https://user-images.githubusercontent.com/114847858/232559602-36604e6a-f90d-4e35-9abc-a5ffcaa89c0f.gif)

## 5. 크로스 브라우징
- 다양한 브라우저에서 사용 할 수 있도록 기본적인 Method를 사용하여 기능을 구현하였습니다. 

## 6. 유지보수
- 주요 페이지를 units으로 구분하여 코드를 구성하였습니다.

## 7. 반응형 디자인
- mediaQueries를 사용하여 PC, 태블릭, 모바일 모두 UI가 깨지지 않게 설계하였습니다.
![반응형](https://user-images.githubusercontent.com/114847858/232559850-44613254-320c-4251-a291-0bf6c4776984.gif)

## 8. 디자인
- 필요한 내용만 추가하여 페이지를 구성하였습니다.

## 9. 사용자 친화적
- 사용자가 익숙한 TopBar, 반응형, 로그인등의 디자인을 추가하였습니다.
