import React, { useRef, FC } from 'react';
import { IoArrowForward } from 'react-icons/io5';
import { InputContainer, Button, Input } from './styles';

interface InputProps {
  onChange: (name: string | undefined) => void;
}

const InputName: FC<InputProps> = ({ onChange }: InputProps) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <InputContainer>
      <Input placeholder="Insira seu nome" ref={ref} />
      <Button onClick={() => onChange && onChange(ref.current?.value)}>
        <IoArrowForward />
      </Button>
    </InputContainer>
  );
};

export default InputName;
