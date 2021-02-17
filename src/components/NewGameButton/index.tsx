import { FC } from 'react';
import Button from './styles';

interface NewButtonProps {
  click: () => void;
}

const NewButton: FC<NewButtonProps> = ({ click }) => {
  return <Button onClick={() => click()}>Nova Partida</Button>;
};

export default NewButton;
