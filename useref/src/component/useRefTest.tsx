import { useRef } from 'react';

export const UseRefTest = () => {
  const count = useRef(0);
  const handleClick = () => {
    count.current += 1;
    console.log('현재 ref 값 = ', count.current);
  };
  return (
    <>
      <p>ref는 리렌더를 발생하지 않아요</p>
      <p>때문에 이 버튼을 아무리 눌러도 아래 카운터 값은 바뀌지 않는 것 처럼 보여요</p>
      <p>카운터 = {count.current}</p>
      <button onClick={handleClick}>클릭하면 ref 값이 올라가요</button>
    </>
  );
};
