# 201830121\_유인준

## <b>5주차</b> - 2023.04.6(목)

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
