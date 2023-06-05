import { useRef } from 'react';

const useRefTest = () => {
  const count = useRef(0);
  const handleClick = () => {
    count.current += 1;
    console.log(count.current);
  };
  return (
    <>
      <p>ref는 리렌더를 발생하지 않아요</p>
      <button onClick={handleClick}>클릭하면 ref 값이 올라가요</button>
    </>
  );
};

export default useRefTest;
