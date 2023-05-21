import { useMemo, useState } from 'react';

const UseMemo = () => {
  const [totalPost, setTotalPost] = useState(100);
  const [value, setValue] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const searchList = useMemo(() => {
    console.log('엄청 오래 걸리는 함수');
    return `총 "${totalPost}건 검색됨"`;
  }, [totalPost]);

  // const searchList = () => {
  //   console.log('엄청 오래 걸리는 함수');
  //   return `총 "${totalPost}건 검색됨"`;
  // };

  return (
    <div>
      <p>나는 useMemo 컴포넌트</p>
      <input placeholder='아무거나입력' onChange={onChange} />
      <p>{searchList}</p>
    </div>
  );
};

export default UseMemo;
