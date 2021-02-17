import styled from 'styled-components';

export const ScoreBoardContainer = styled.div`
  display: flex;
  width: 50%;
`;

export const ScoreBoardRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;

export const ScoreBoardColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;

  padding: 5px;
  border-bottom: 2px solid #13e5ed;
  align-items: center;
`;

export const ScoreBoardTitle = styled.h1`
  font-family: 'Teko', sans-serif;
  color: #13e5ed;
  font-size: 35px;
  font-weight: normal;
  text-transform: uppercase;
  text-shadow: 2px 2px 0 #000;
`;

export const ScoreBoardProp = styled.h1`
  font-family: 'Teko', sans-serif;
  color: #fff;
  font-size: 28px;
  font-weight: normal;
  text-transform: uppercase;
  text-shadow: 2px 2px 0 #000;
`;
