import { AvoidRefRecreating, UseRefTest, WriteRefDuringRerender, UseRefDIY } from './component';

function App() {
  return (
    <>
      {/* <UseRefTest /> */}
      {/* <WriteRefDuringRerender /> */}
      {/* <AvoidRefRecreating /> */}
      <UseRefDIY />
    </>
  );
}

export default App;
