import { FC } from 'react';
import {
  ScoreBoardColumn,
  ScoreBoardRow,
  ScoreBoardContainer,
  ScoreBoardTitle,
  ScoreBoardProp,
} from './styles';

interface ScoreBoardProps {
  props: { playerName: string | null | undefined; attempts: number }[];
}

const ScoreBoard: FC<ScoreBoardProps> = ({ props }) => {
  return (
    <>
      <ScoreBoardContainer>
        <ScoreBoardRow>
          <ScoreBoardColumn>
            <ScoreBoardTitle>Player</ScoreBoardTitle>
          </ScoreBoardColumn>
        </ScoreBoardRow>
        <ScoreBoardRow>
          <ScoreBoardColumn>
            <ScoreBoardTitle>Tentativas</ScoreBoardTitle>
          </ScoreBoardColumn>
        </ScoreBoardRow>
      </ScoreBoardContainer>
      {props &&
        props.map(({ playerName, attempts }) => (
          <ScoreBoardContainer>
            <ScoreBoardRow>
              <ScoreBoardColumn>
                <ScoreBoardProp>{playerName}</ScoreBoardProp>
              </ScoreBoardColumn>
            </ScoreBoardRow>
            <ScoreBoardRow>
              <ScoreBoardColumn>
                <ScoreBoardProp>{attempts}</ScoreBoardProp>
              </ScoreBoardColumn>
            </ScoreBoardRow>
          </ScoreBoardContainer>
        ))}
    </>
  );
};

export default ScoreBoard;
