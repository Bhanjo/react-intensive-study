import { useRef } from 'react';

export const WriteRefDuringRerender = () => {
  const someRef = useRef(0);

  // 렌더링 중에 값을 변경하면 안된다.
  someRef.current = 100;

  return (
    <>
      {/* 렌더링 중 값을 읽으면 안된다. */}
      <p>ref 값은 {someRef.current}입니다</p>
    </>
  );
};

export default WriteRefDuringRerender;
