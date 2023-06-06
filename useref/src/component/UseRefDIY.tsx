import { useMemo, useState } from 'react';

export const UseRefDIY = () => {
  // 값을 유지하기 위해 useMemo 사용. 원래 useRef의 경우 mount될 떄 전역 객체에 ref 값을 저장한다.
  const customRef = useMemo(() => myRef(0), []);

  const [value, setValue] = useState(0);
  let letValue = 0;

  const addRefValue = () => {
    console.log('addRefValue 실행', customRef.current);
    customRef.current += 1;
  };

  const addLetValue = () => {
    letValue += 1;
    console.log('addLetValue 실행', letValue);
  };

  const addStateValue = () => {
    setValue((prev) => prev + 1);
  };

  return (
    <>
      <h2>useRef를 직접 만들어봅니다.</h2>
      <button onClick={addRefValue}>useRef 값 {customRef.current}에서 +1</button>
      <button onClick={addLetValue}>let 값 {letValue}에서 + 1</button>
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
