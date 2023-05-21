import { useMemo, useState } from 'react';

const TestMemo = () => {
  const [value, setValue] = useState(0);
  const [garbageValue, setGarbageValue] = useState(0);

  // const memo = useMemo(() => {
  //   console.log('엄청 무거운 작업 실행');
  //   for (let i = 0; i < 1000000000; i++) {}
  //   return value;
  // }, [value]);
  const memo = () => {
    console.log('엄청 무거운 작업 실행');
    for (let i = 0; i < 1000000000; i++) {}
    return value;
  };

  const onClickRealValue = () => {
    console.log('메모 deps 값이 바뀌는 이벤트');
    setValue((prev) => prev + 1);
  };

  const onClick = () => {
    console.log('그냥 의미 없는 이벤트');
    setGarbageValue((prev) => prev + 1);
  };

  return (
    <>
      <p>useMemo를 사용하면 얼마나 빨라질지 테스트</p>
      {/* <p>{memo}</p> */}
      <p>{memo()}</p>
      <button onClick={onClickRealValue}>
        메모 값이 변하는 버튼 = {value}
      </button>
      <button onClick={onClick}>클릭 의미없는 값 = {garbageValue}</button>
    </>
  );
};

export default TestMemo;
