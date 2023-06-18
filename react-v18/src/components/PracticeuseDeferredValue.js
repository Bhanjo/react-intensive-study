import { useDeferredValue, useState } from 'react';

export const PracticeUseDefferdValue = () => {
  const [value, setValue] = useState();

  return (
    <>
      <h1>useDefferdValue 연습</h1>
      <input onChange={(e) => setValue(e.target.value)} />
      <ChildComponent value={value} />
    </>
  );
};

const ChildComponent = ({ value = '기본값' }) => {
  const defferdValue = useDeferredValue(value);
  return <p>{defferdValue}</p>;
};
