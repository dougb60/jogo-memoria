import styled from 'styled-components';

export const flipCard = styled.div`
  width: 150px;
  height: 180px;
  margin: 5px;
  padding: 0 10px;

  background: #91f2bb;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  border-radius: 10px;
`;

export const flipCardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
`;

export const flipCardFront = styled.div`
  background-color: #bbb;
  color: black;
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
`;

export const flipCardBack = styled.div`
  background-color: #2980b9;
  color: white;
  transform: rotateY(180deg);
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
`;
