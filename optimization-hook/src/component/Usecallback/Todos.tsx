import React from 'react';

interface Props {
  getTodos: () => void;
}

const Todos = ({ getTodos }: Props) => {
  console.log('리렌더', getTodos());

  return (
    <>
      <p>나는 todos컴포넌트</p>
    </>
  );
};

export default React.memo(Todos);
