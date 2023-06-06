import {
  AvoidRefRecreating,
  UseRefTest,
  WriteRefDuringRerender,
  UseRefDIY,
  UseRefDIY2,
} from './component';

function App() {
  return (
    <>
      {/* <UseRefTest /> */}
      {/* <WriteRefDuringRerender /> */}
      {/* <AvoidRefRecreating /> */}
      <UseRefDIY />
      <UseRefDIY2 />
    </>
  );
}

export default App;
