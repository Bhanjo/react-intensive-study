import { useEffect } from 'react';

interface Props {
  text: string;
  toggle: boolean;
  onClick: () => void;
}

const Toggle = ({ text, toggle, onClick }: Props) => {
  useEffect(() => {
    console.log(`${text}변화`, toggle);
  }, [text, toggle]);

  return <button onClick={onClick}>{text}</button>;
};

export default Toggle;
