import styled, { keyframes } from 'styled-components';
import img from '../../assets/images/cpbck.jpeg';

interface backCardProps {
  backImg?: string;
}

const flicker = keyframes`
  50% {
        color: white;
        filter: saturate(200%) hue-rotate(20deg);
     }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  padding: 10px;

  max-width: 80%;
  margin: 0 auto;
  background: #161840;

  box-shadow: 0 20px 50px rgba(8, 112, 184, 0.7);
`;

export const TitleContainter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.h1`
  font-family: 'Teko', sans-serif;
  color: azure;
  font-size: 65px;
  font-weight: normal;
  line-height: 60px;
  text-transform: uppercase;
  text-shadow: 2px 2px 0 #000;
  text-align: center;

  display: block;
  text-shadow: 0 0 10px azure, 0 0 20px aqua, 0 0 40px dodgerblue, 0 0 80px blue;
  will-change: filter, color;
  filter: saturate(60%);
  animation: ${flicker} steps(100) 1s infinite;
`;
export const SubTitle = styled.h4`
  font-family: 'Teko', sans-serif;
  color: lightyellow;
  font-size: 30px;
  margin: 10px 0 20px;
  text-transform: uppercase;
  text-shadow: 2px 2px 0 #000;
  text-align: center;

  display: block;
  text-shadow: 0 0 10px yellow, 0 0 20px gold, 0 0 40px orange, 0 0 80px darkred;
  will-change: filter, color;
  filter: saturate(60%);
  animation: ${flicker} steps(100) 1s infinite;
`;

export const FrontCard = styled.div`
  width: 150px;
  height: 180px;
  margin: 5px;
  padding: 0 10px;

  background: #91f2bb;
  background-image: url(${img});
  background-size: 150px;

  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  border-radius: 10px;

  cursor: pointer;

  :hover {
    transform: scale(1.05);
    transition-duration: 500ms;
  }
`;

export const BackCard = styled.div<backCardProps>`
  width: 150px;
  height: 180px;
  margin: 5px;
  padding: 0 10px;

  background: #13e5ed;
  background-image: ${({ backImg }) => `url('assets/images/${backImg}')`};
  background-repeat: no-repeat;
  background-size: 150px 170px;
  background-position-x: center;
  background-position-y: center;

  box-shadow: rgba(171, 4, 217, 0.3) 0px 1px 2px 0px,
    rgba(171, 4, 217, 0.15) 0px 1px 3px 1px;
  border-radius: 10px;

  cursor: pointer;
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 100%;
`;

export const ContentContainer = styled.div`
  justify-content: center;
`;
