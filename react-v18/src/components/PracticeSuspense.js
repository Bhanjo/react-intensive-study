import { Suspense, lazy } from 'react';

const PostComponent = lazy(() => import('./SuspenseChild.js'));

export const PracticeSuspense = () => {
  return (
    <Suspense fallback={<div>Loading...123123</div>}>
      <PostComponent />
    </Suspense>
  );
};
