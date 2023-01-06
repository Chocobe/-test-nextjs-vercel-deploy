# preparing-labelr-web

* `NextJS` 프로젝트 보일러 플레이트 입니다.

<br />

## 개요

1. 주요 라이브러리 목록
2. `Redux Slice` 및 `Redux Saga`, `API` 에 대한 컨벤션
3. `Stylesheet` 는 `CSS-in-JS` 로 구현하기 위해, `styled-components` 사용
    * `theme` 적용 예정
    * 현재는 `theme` 에 대한 디자인 시스템은 미구현 상태 입니다.




<br /><hr /><br />



## 1. 주요 라이브러리 목록

* `redux-toolkit`
    * 상태관리는 `Slice` 단위로 구현 합니다.
    * `redux/slices/**/*.ts` 에 위치 합니다.
    * 비동기 처리는 `redux-saga` 에서 처리 합니다.

* `redux-saga`
    * `Store` 의 `비동기` 처리를 담당 합니다.
    * `network/redux/sagas/**/*.ts` 에 위치 합니다.
    * `RTK Query` 와 선택의 고민이 있었습니다.
        * `RTK Query` 사용 시, `DevTools` 에서 `State` 확인이 불편한 단점이 있습니다.
        * `RTK Query` 의 `BaseQuery (API 요청 실체 메서드)` 를 `Axios` 로 커스터마이징 작업이 필요 합니다.
        * `RTK Query` 를 통해 가져온 `Data` 를 특정 `컴포넌트` 또는 `커스텀 훅` 으로 각각 만들어야 합니다.
        * `RTK Query` 를 사용하여도 `Redux Saga` 와 크게 다르지 않은 `코드 파편화` 가 됩니다.
    * `RTK Query` 를 사용하였을 때의 코드는 줄어들지만, `상태값` 에 대한 디버깅의 불편함과 `Redux Saga` 와 크게 다르지 않는 `코드 파편화` 로 인해, 자유로운 `State` 구성을 할 수 있는 `Redux Saga` 를 선택 하였습니다.

* `axios`
    * `API 요청` 을 담당합니다.
    * `axios` 인스턴스는 `network/restClient.ts` 에서 구현합니다.
    * `network/api` 에는 `API 요청 URL` 의 `path` 로 나누어 구현하며, 다음과 같은 구성을 갖습니다.
        * `___Api.ts`: `restClient.ts` 를 직접 사용하여 `서버요청` 을 합니다.
        * `___ApiTypes.ts`: 서버요청 관련 `Type` 을 정의합니다.
        * `___ApiUrlList.ts`: 서버요청 `URL` 을 정의합니다.

* `styled-components`
    * `CSS-in-JS` 입니다.
    * 사용가능한 `theme` 값은 `styles/theme.ts` 에 정의되어 있습니다.
    * `Tailwindcss` 와 `Twin.macro` 를 연동을 시도하였지만, 제거하였습니다.
        * `styled-components` 의 테마와 `tailwindcss` 테마를 하나로 묶을 수 없었습닌다.

* `react-icons`
    * `Feather Icons` 를 사용합니다.



<br /><hr /><br />



## 2. `Redux Slice` 및 `Redux Saga`, `API` 에 대한 컨벤션

`state` 는 다음과 같이 구성합니다.

* `retrieve`: 서버에서 응답받은 원본 데이터에 대한 상태값
    * `retrieve.isPending`: 서버 응답 대기 상태값
    * `retrieve.data`: 서버의 유효한 응답 시, 응답 데이터
    * `retrieve.error`: 서버의 에러 응답 시, 응답 에러 데이터
    * (`SWR` 상태관리 패턴)
* `retrieve` 와 같이, 아래의 `action 명` 에 해당하는 `state 프로퍼티` 들을 구성할 수 있습니다.

<br />

`action 명` 은 다음과 같이 `Prefixer` 를 사용합니다.

* `set___()`: `상태변경` action명
    * `set`: 정하다 (박아넣다)
* `reset___()`: `초기화` action명
    * `reset`: 다시놓다 (기존에 쓰던것을 버리고)

<br />

아래의 `action 명` 은 실제로 구현하는 것이 아닌, 개념적 요소 입니다.

실제 구현할 `action 명` 은 다음 문단을 참조해 주세요.

* `retrieve___()`: `API GET` action명
    * `retrieve`: 검색하다 (검색 결과를 가져오다)
* `produce___()`: `API POST` action명
    * `produce`: 생산하다
* `put___()`: `API PUT` action명
* `patch___()`: `API PATCH` action명
* `eliminate___()`: `API DELETE` action명
    * `eliminate`: 제거하다 (완전히)

<br />

`action 명` 중, `API 요청` 관련 `action` 은 다음과 같이 3가지 `action` 을 쌍으로 구현합니다.

* `retrieve___Requested()`
    * 서버 요청 전, 기존 `State` 초기화 로직
    * `redux-saga` 의 트리거 action
* `retrieve__Succeed()`
    * 서버의 정상 응답값을 `redux-slice` 에 적용하는 로직
    * 서버 요청이 완료된 시점, `fulfilled` 되면, `redux-saga` 내부에서 호출
* `retrieve__Failed()`
    * 서버의 에러 응답 시, 에러 데이터를 `redux-slice` 에 적용하는 로직
    * `redux-saga` 에서 서버 에러 발생 시, `redux-saga` 내부에서 호출

<br />

`redux-saga` 로 구현할 `generator 명` 은 다음과 같이 구현 합니다.

* API 요청 `최상위 path` 를 기준으로 `redux-saga` 를 구현 합니다.
    * 구현할 `saga` 는 `path 명` 을 기준으로 폴더를 나눕니다. 
        * 예시: `redux/sagas/___Saga/___Saga.ts`
    * `Saga` 관련 `Type` 은 `redux/sagas/___Saga/___SagaTypes.ts` 에 구현 합니다.
    * 서버의 정상 응답 시, `___Succeed()` action 을 호출 합니다.
    * 서벙의 에러 응답 시, `___Failed()` action 을 호출 합니다.
    * 각 action 을 담당하는 개별 `Saga Generator` 는 `파일명Saga` 로 묶습니다.
        * `Saga Effector` 중, `takeLatest` 를 사용

<br />

