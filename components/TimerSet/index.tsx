import * as S from './style';

export default function TimerSet(): JSX.Element {
  return (
    <S.TimerContainer>
      <S.CountBtn icon="fas fa-angle-left" onClick={() => {}} />
      <S.Timer value="3" />
      <S.CountBtn icon="fas fa-angle-right" onClick={() => {}} />
    </S.TimerContainer>
  );
}
