# 201830121\_유인준

## <b>6주차</b> - 2023.04.13(목)

<details>
<summary>
강의 내용
</summary>
<ul>
<details> 
<summary>생명주기</summary>

- componentDidMount()
- componentDidUpdate()
- componentWillUnmount()
</details>

<details> 
<summary>Hooks</summary>

- 훅이란?
  - 'state'와 생명주기 기능에 갈고리를 걸어 원하는 시점에 정해진 함수를 실행되도록 만든 함수이다.
  - 훅의 이름은 모두 'use'로 시작한다.
  - 사용자정의 훅(custom hook)을 만들 수 있으며, 이름은 자유롭게 하되 'use'로 시작하는 것이 권장된다.
- useState

  - 함수형 컴포넌트에서 state를 사용하기 위한 hook이다.
  - useState를 사용하지 않아도 변화를 줄 수 있지만 재렌더링이 일어나지 않는다.
  - 사용법

    - ```javascript
      const [변수명, set변수명] = useState(초기값);
      ```

    - 첫번째 항목은 state의 이름(변수명)
    - 두번째 항목은 state의 set함수, 즉 state를 업데이트 하는 함수이다.
    - 함수를 호출할 때 state의 초기값을 설정한다.
    - 함수의 리턴 값은 배열의 형태이다.

- useEffect

  - '사이드 이펙트'를 수행하기 위한 것이다.
  - 영어로 side effect는 부작용을 의미한다. 일반적으로 프로그래밍에서 사이드 이펙트는 '개발자가 의도하지 않은 코드가 실행되면서 버그가 발생하는 것'을 말한다.
  - 클래스 컴포넌트의 생명주기 함수와 같은 기능을 하나로 통합한 기능을 제공한다.
  - 결국 side effect는 렌더링 외에 실행해야 한느 부수적인 코드를 말한다.
  - 사용법

    - ```javascript
      useEffect(이펙트 함수, 의존성 배열);
      ```
    - 의존성 배열은 이펙트가 의존하고 있는 배열로, 배열 안에 있는 변수 중에 하나라도 값이 변경되었을 때 이펙트 함수가 실행된다.
    - 만약 이펙트 함수가 마운트, 언마운트 될 때만 한번씩 실행되게 하고 싶으면 빈 배열을 넣으면 된다.
    - 의존성 배열을 생략하는 경우는 업데이트 될 때마다 호출된다.

- useMemo

  - Memoized value를 리턴하는 훅이다.
  - 이전 계산값을 갖고 있기 때문에 연산량이 많은 작업의 반복을 피할 수 있다.
  - 이 훅은 렌더링이 일어나는 동안 실행된다.
  - 따라서 렌더링이 일어나는 동안 실행돼서는 안될 작업을 넣으면 안된다.
  - 예를 들면 useEffect 같은 것이다.

  - ```javascript
     const memoizedValue = useMemo(() => {
       // 연상량이 높은 작업을 수행하여 결과를 반환
       return computerExpensiveValue(의존성 변수1, 의존성 변수2);
     },[의존성 변수1, 의존성 변수2]);
    ```
  - 의존성 배열을 넣지 않을 경우, 렌더링이 일어날 때마다 매번 함수가 실행된다.
  - 따라서 의존성 배열을 넣지 않는 것은 의미가 없다.
  - 만약 빈 배열을 넣게 되면 컴포넌트 마운트 시에만 함수가 실행된다.

- useCallback
  - useMemo()와 유사한 역할을 한다.
  - 차이점은 값이 아닌 함수를 반환한다는 점이다.
  - 파라미터로 받은 함수를 콜백이라고 부른다.
  - useMemo와 마찬가지로 의존성 배열 중 하나라도 변경되면 콜백함수를 반환한다.
- useRef

  - 레퍼런스를 사용하기 위한 훅이다.
  - 레퍼런스란 특정 컴포넌트에 접근할 수 있는 객체를 의미힌다.
  - 레퍼런스 객체에는 .current라는 속성이 있는데, 이것은 현재 참조하고 있는 엘리먼트를 의미한다.
  - ```javascript
    const refContainer = useRef(초기값);
    ```
  - 이렇게 반환된 레퍼런스 객체는 컴포넌트의 라이프타임 전체에 걸쳐서 유지된다.

- 훅의 규칙

  - 첫번째 규칙은 무조건 최상위 레벨에서만 호출해야 된다. 여기서 최상위는 컴포넌트의 최상위 레벨을 말한다.
  - 따라서 반복문이나 조건문 또는 중첩된 함수들 안에서 훅을 호출하면 안 된다.
  - 이 규칙에 따라서 훅은 컴포넌트가 렌더링 될 때마다 같은 순서로 호출되어야 한다.
  - 두번째 규칙은 리액트 함수 컴포넌트에서만 훅을 호출해야 한다는 점이다.
  - 일반 자바스크립트 함수에서 훅을 호출하면 안된다.
  - 훅은 리액트의 함수 컴포넌트 훅은 직접 만든 커스텀 훅에서만 호출할 수 있다.

- 커스텀 훅 만들기

  1. 커스텀 훅을 만들어야 하는 상황

  </details> 
  </ul>
  </details>
  <br>

## <b>5주차</b> - 2023.04.06(목)

<details>
<summary>
강의 내용
</summary>
<ul>
<li>컴포넌트 추출</li>

- 복잡한 컴포넌트를 쪼개서 여러 개의 컴포넌트로 나눌 수 있다.
- 큰 컴포넌트에서 일부를 추출해서 새로운 컴포넌트를 만드는 것이다.
- 실무에서는 처음부터 1개의 컴포넌트에 하나의 기능만 사용하도록 설계하는 것이 좋다.
<li>state와 생명주기</li>

<details> 
<summary>state</summary>

- state란
  - state는 리액트 컴포넌트의 상태를 의미함
  - 상태의 의미는 정상인지 비정상인지가 아니라 컴포넌트의 데이터를 의미함
  - state가 변하면 재렌더링 되기 때문에 렌더링과 관련된 값만 state 값에 포함시켜야함
- state의 특징

  - 리액트만의 특별한 형태가 아닌 js 객체일 뿐이다.
  - 직접 변경하는 것은 안되고 setState()를 이용하여 변경한다.
  </details>
  <details> 
  <summary>생명주기</summary>

- 생명주기는 컴포넌트의 생성 시점, 사용 시점, 종료 시점을 나타낸다.
- constructor가 실행되면서 컴포넌트가 생성된다.
- 생성 직후 conponentDidMount() 함수가 호출된다.
- 컴포넌트가 소멸하기 전까지 여러 번 랜더링한다.
- 렌더링은 props, setState(), forceUpdate() 에 의해 상태가 변경되면 이루어진다.
- 그리고 렌더링이 끝나면 componentDidUpdate() 함수가 호출된다.
- 마지막으로 컴포넌트가 언마운트 되면 componentWillUnmount() 함수가 호출된다.
</details>

</details>
  </ul>
  </details>
  </br>

## <b>4주차</b> - 2023.03.30(목)

<details>
<summary>
강의 내용
</summary>
<ul>

<details>
<summary>
엘리먼트 렌더링
</summary>

<li>엘리먼트는 리액트 앱의 가장 작은 빌딩 블록들</li>

|                       | DOM                 | Virtural DOM                                                         |
| --------------------- | ------------------- | -------------------------------------------------------------------- |
| 업데이트 속도         | 느리다              | 빠르다                                                               |
| element 업데이트 방식 | DOM 전체를 업데이트 | 변화 부분을 가상 DOM으로 만든 후 DOM과 비교하여 다른 부분만 업데이트 |
| 메모리                | 낭비가 심함         | 효율적                                                               |

<li>엘리먼트의 생김새</li>
- 리액트 엘리먼트는 자바스크립트 객체의 형태로 존재한다.
- 컴포넌트, 속성 등 내부의 모든 children을 포함하는 일반 JS 객체이다.
- 불변성을 가진다.

```javascript
// JavaScript
{
  type: 'button',
  props: {
    className: 'bg-green',
    children: {
      type: 'b',
      props:{
        children: "Hello, element'
      }
    }
  }
}
```

- 첫번째 매개변수 type은 태그가 들어가면 그대로 표현하고 리액트 컴포넌트가 들어가면 이것을 분해하고 태그로 만든다.
- 두번째 매개변수 props는 속성을 나타낸다.
- 세번째 매개변수 children은 자식태그다.

```javascript
// React
<button class='bg-green'>
  <b>Hello, element</b>
</button>
```

<li>엘리먼트의 특징</li>

- 가장 큰 특징은 불변성이다. 즉, 한번 생성된 엘리먼트의 children이나 속성은 바꿀 수 없다.
<li>CDN 방식으로 시계 만들기</li>
<li>CRA 방식으로 시계 만들기</li>
</details>
<details>
<summary>
컴포넌트와 props
</summary>

- 컴포넌트
  - 리액트는 컴포넌트 기반의 구조
  - 컴포넌트는 재사용
- Props

  - property의 준말
  - 컴포넌트의 속성
  - props의 특징
    - 읽기전용(변경 불가능)
    - 속성이 다른 엘리먼트를 생성하려면 새로운 props를 컴포넌트에 전달해야함
  - Pure 함수 vs Impure 함수

    - Pure 함수는 인수로 받은 정보가 함수 내부에서도 변하지 않는 함수

      ```javascript
      function sum(a,b) {
        reutrn a + b;
      }
      ```

    - Impure 함수는 인수로 받은 정보가 함수 내부에서 변하는 함수

      ```javascript
      function sum(account, amount) {
        account.total = amount;
      }
      ```

  - props 사용법

    - JSX에서는 key-value쌍으로 props를 구성한다.
      ```javascript
      function App(props) {
        return (
          <Profile
            name='인준'
            introduction='안녕하세요, 인준입니다.'
            viewCount={1000}
          />
        );
      }
      ```
    - JSX에서는 중괄호를 사용하면 js코드를 넣을 수 있다.
      ```javascript
      function App(props) {
        return (
          <Layout
            width={2560}
            height={1440}
            header={<Header title='인준의 블로그입니다.' />}
            footer={<Footer />}
          />
        );
      }
      ```

    </ul>

    </br>

- 컴포넌트 만들기
  - 컴포넌트의 종류
    - 리액트 초기 버전에서는 클래스형 컴포넌트를 주로 사용
    - 이후 Hook이라는 개념이 나오면서 최근에는 함수형 컴포넌트를 주로 사용
    - 하지만 아직 클래스형 컴포넌트가 남아있기 때문에 둘 다 알아야함
    - 함수형 컴포넌트
      ```javascript
      function Welcome(props) {
        return <h1>안녕 , {props.name}</h1>;
      }
      ```
    - 클래스형 컴포넌트
    ```javascript
    class Welcome extends React.Component {
      render() {
        return <h1>안녕 , {this.props.name}</h1>;
      }
    }
    ```
  - 컴포넌트 이름 짓기
    - 이름은 항상 대문자로 시작한다. (소문자로 시작하면 DOM태그로 인식한다.)
    - 컴포넌트 파일은 컴포넌트 이름과 같게 한다.
  - 컴포넌트의 함성
  - 컴포넌트의 추출
  </details>
    </details>
    </br>

## <b>3주차</b> - 2023.03.23(목)

<details>
<summary>
강의 내용
</summary>
<ul>
<li>리액트 앱 만들기</li>
<li>jsx란</li>
<ul>
<li>jsx 문법</li>
<li>jsx 장점</li>

- 가독성이 좋다.
- 효율이 좋다.
- injection attack 보안에 강력하다.
<li>jsx 사용법</li>
</ul>
<li>jsx 코드 작성해보기</li>

</ul>
</details>
</br>

## <b>2주차</b> - 2023.03.16(목)

<details>
<summary>
강의 내용
</summary>
<ul>
<li>윈도우 패키지 매니저(쇼쿄레이티)</li>
<li>npm(node package manager), npx(node package runner)</li>
<li>리액트란 무엇인가</li>
<li>리액트의 장점</li>
<ul>
<li>동기식과 비동기식</li>
<li>DOM과 가상 DOM</li>
<li>컴포넌트 기반 구조</li>
<li>재사용성</li>
</ul>
<li>리액트의 단점</li>
<ul>
<li>방대한 학습량</li>
<li>높은 상태 관리 복잡도</li>
</ul>
<li>웹사이트에 React 추가하기</li>
<li>create-react-app 실습</li>

</ul>
</details>
</br>

## <b>1주차</b> - 2023.03.09(목)

<details>
<summary>
강의 내용
</summary>
<ul>
<li>깃허브 계정 생성 방법</li>
<li>깃허브 & vscode 연동 방법</li>
<li>git commit & push 방법</li>
<li>gitignore 설정방법

[링크](https://www.toptal.com/developers/gitignore)

</li>
<li>클론하는 방법</li>
<li>HTML, CSS, JS란 무엇인가</li>
</ul>
</details>
