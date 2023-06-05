import {
  AvoidRefRecreating,
  UseRefTest,
  WriteRefDuringRerender,
} from './component';

function App() {
  return (
    <>
      {/* <UseRefTest /> */}
      {/* <WriteRefDuringRerender /> */}
      <AvoidRefRecreating />
    </>
  );
}

export default App;
