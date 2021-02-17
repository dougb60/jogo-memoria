import { FC } from 'react';
import Button from './styles';

interface NewButtonProps {
  click: () => void;
  text: string;
  sizes?: { width: string; margin: string };
}

const NewButton: FC<NewButtonProps> = ({ click, text, sizes }) => {
  return (
    <Button onClick={() => click()} sizes={sizes}>
      {text}
    </Button>
  );
};

export default NewButton;
