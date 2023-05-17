import { useCallback, useState } from 'react';
import './App.css';
import Toggle from './component/Toggle';
import Todos from './component/Todos';

function App() {
  const [todos, setTodos] = useState([]);
  const [theme, setTheme] = useState(false);

  const getTodos = useCallback(() => {
    return todos;
  }, [todos]);

  const handleTheme = () => {
    setTheme(!theme);
  };

  return (
    <>
      <Todos getTodos={getTodos} />
      <Toggle text={'테마토글'} toggle={theme} onClick={handleTheme} />
    </>
  );
}

export default App;
