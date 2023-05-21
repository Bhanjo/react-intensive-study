import Todos from './Todos';
import Toggle from './Toggle';
import { useCallback, useState } from 'react';

const UseCallback = () => {
  const [todos, setTodos] = useState([]);
  const [theme, setTheme] = useState(false);

  // const getTodos = () => {
  //   return todos;
  // };
  const getTodos = useCallback(() => {
    return todos;
  }, [todos]);

  const handleTheme = () => {
    setTheme(!theme);
  };

  return (
    <div style={{ border: '1px solid black' }}>
      <Toggle text={'테마토글'} toggle={theme} onClick={handleTheme} />
      <Todos getTodos={getTodos} />
    </div>
  );
};

export default UseCallback;
