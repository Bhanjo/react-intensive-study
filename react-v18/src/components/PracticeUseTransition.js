import { useState, useTransition } from 'react';

export const PracticeUseTransition = () => {
  const [isPending, startTransition] = useTransition();
  const [count, setCount] = useState(0);

  const inc = () => {
    startTransition(() => {
      // 여기에 동시성을 적용할 동작을 명세한다.
      setCount((count) => count + 1);
    });
  };

  const counterAmountArray = Array.from(
    { length: 15000 },
    (value, index) => ''
  );

  return (
    <>
      <h1>useTransition 연습</h1>
      <button onClick={inc}>+1</button>
      {isPending ? <p>pending!!</p> : <p>not pending</p>}

      {counterAmountArray.map((item) => {
        return <p>현재 카운트: {count}</p>;
      })}
    </>
  );
};
