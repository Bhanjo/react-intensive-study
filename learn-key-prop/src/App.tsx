import KeyTest from './component/KeyTest';

function App() {
  // const appendLiEl = () => {
  //   const prevList = [...list];
  //   prevList.splice(5000, 0, '새로추가');
  //   setList(prevList);
  // };
  // const [list, setList] = useState(new Array(10000).fill('기존내용'));

  return (
    // <>
    //   <button onClick={appendLiEl}>추가하기</button>
    //   <ul>
    //     {/* 의문, key prop을 쓰지 않은 것이 0.5s ~ 0.7s 더 빠르다. 왜?? */}
    //     {list.map((item, idx) => (
    //       // <li key={idx}>{item}</li>
    //       <li>{item}</li>
    //     ))}
    //   </ul>
    // </>
    <>
      <KeyTest />
    </>
  );
}

export default App;
