import { useEffect } from 'react';

interface Props {
  getTodos: () => void;
}

const Todos = ({ getTodos }: Props) => {
  useEffect(() => {
    console.log('todos가 변했어요', getTodos());
  }, [getTodos]);

  return (
    <>
      <p>나는 todos컴포넌트</p>
    </>
  );
};

export default Todos;
