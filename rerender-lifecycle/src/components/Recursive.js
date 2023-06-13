const Recursive = () => {
  return (
    <>
      나는 부모 <Child />
    </>
  );
};

const Child = () => {
  return (
    <>
      나는 자식 <Child2 />
    </>
  );
};
const Child2 = () => {
  return <>나는 자식의 자식 더이상 자식이 없으니 재귀 끝</>;
};

export default Recursive;
