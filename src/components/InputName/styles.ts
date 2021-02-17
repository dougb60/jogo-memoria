import styled, { keyframes } from 'styled-components';

const gradient = keyframes`
  0%{background-position:0 0}
  100%{background-position:100% 0}
`;

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 450px;
  margin: 5rem auto;
  border-radius: 2px;
  padding: 0.6rem 0.3rem 0.5rem;
  background: rgba(57, 63, 84, 0.8);

  &:after {
    content: '';
    position: absolute;
    left: 0px;
    right: 0px;
    bottom: 0px;
    z-index: 999;
    height: 2px;
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
    background-position: 0% 0%;
    background: linear-gradient(
      to right,
      #b294ff,
      #57e6e6,
      #feffb8,
      #57e6e6,
      #b294ff,
      #57e6e6
    );
    background-size: 500% auto;
    animation: ${gradient} 3s linear infinite;
  }
`;

export const Input = styled.input`
  flex-grow: 1;
  color: #bfd2ff;
  font-size: 1.8rem;
  line-height: 2.4rem;
  vertical-align: middle;
  &::-webkit-input-placeholder {
    color: #7881a1;
  }
`;

export const Button = styled.button`
  color: #7881a1;
  font-size: 2.4rem;
  line-height: 2.4rem;
  vertical-align: middle;
  transition: color 0.25s;
  &:hover {
    color: #bfd2ff;
  }
  cursor: pointer;
`;
