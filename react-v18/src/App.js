import { Suspense, lazy } from 'react';
import {
  PracticeUseTransition,
  PracticeUseDefferdValue,
  PracticeSuspense,
} from './components';

function App() {
  return (
    <>
      {/* <PracticeUseTransition /> */}
      {/* <PracticeUseDefferdValue /> */}
      <PracticeSuspense />
    </>
  );
}

export default App;
