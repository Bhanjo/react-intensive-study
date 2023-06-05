import { useRef, useState } from 'react';

export const AvoidRefRecreating = () => {
  const objRef = useRef(new tempClass());
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <>
      count {count}{' '}
      <button type='button' onClick={handleClick}>
        +1
      </button>
    </>
  );
};

class tempClass {
  constructor() {
    console.log('tempClass 생성됨');
  }
}
