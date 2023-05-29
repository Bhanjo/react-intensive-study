import { useState } from 'react';

const KeyTest = () => {
  const [formState, setFormState] = useState({
    list: [
      { name: 'Foo1444610101010', id: 1444610101010 },
      { name: 'Bar1444600000000', id: 1444600000000 },
    ],
  });

  const addItem = () => {
    const id = +new Date();
    setFormState({ list: [{ name: 'New' + id, id }, ...formState.list] });
  };

  return (
    <div>
      <button onClick={addItem}>
        <b>아이템추가</b>
      </button>
      <h3>key를 index로 만들기 (권장하지 않음)</h3>

      <form>
        {formState.list.map((todo, index) => (
          <Item {...todo} key={index} />
        ))}
      </form>

      <h3>key를 고유 id로 만들기 (권장)</h3>
      <form>
        {formState.list.map((todo) => (
          <Item {...todo} key={todo.id} />
        ))}
      </form>
    </div>
  );
};

const Item = (props: { name: string }) => {
  return (
    <div>
      <label>{props.name}</label>
      <div>
        <input type='text' />
      </div>
    </div>
  );
};

export default KeyTest;
