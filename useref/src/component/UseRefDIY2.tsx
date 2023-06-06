import { useMemo, useState } from 'react';

export const UseRefDIY2 = () => {
  const customRef = useMemo(() => myRef(Math.random()), []);

  const [value, setValue] = useState(0);
  let letValue = Math.random();

  //   const addRefValue = () => {
  //     console.log('addRefValue 실행', customRef.current);
  //     customRef.current += 1;
  //   };

  //   const addLetValue = () => {
  //     letValue += 1;
  //     console.log('addLetValue 실행', letValue);
  //   };

  const addStateValue = () => {
    setValue((prev) => prev + 1);
  };

  console.log(customRef.current);

  return (
    <>
      <h2>useRef를 직접 만들어봅니다2. useRef는 리렌더 되어도 값이 유지된다.</h2>
      <p>useRef 값 {customRef.current} 이 값은 컴포넌트가 리렌더링 되어도 유지된다.</p>
      <p>let 값 {letValue} 이 값은 렌더링 될 떄마다 바뀐다.</p>
      <button onClick={addStateValue}>현재 값 {value}에서 + 1</button>
    </>
  );
};

const myRef = (initValue: any) => {
  const dispatcher = new myCurrentDispatcher(initValue);

  if (!dispatcher) {
    throw Error('dispatcher가 없습니다.');
  }

  return dispatcher;
};

class myCurrentDispatcher<T> {
  constructor(initValue?: T) {
    this.current = initValue;
  }
  current;
}
