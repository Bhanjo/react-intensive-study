import { useEffect, useState } from 'react';

const SuspenseChild = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchPost().then((res) => setData(res));
  }, []);

  return <p>{data}</p>;
};

export default SuspenseChild;

const fetchPost = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(() => '나는포스팅');
    }, 2000);
  });
};
