import { useState } from 'react';
import * as S from './style';

const DOWN = 'DOWN';
const UP = 'UP';

// 제한 시간 범위 : 1 ~ 10
const timeRegExp = new RegExp('^(10|[1-9])$');

export default function TimerSet(): JSX.Element {
  const [time, setTime] = useState<number>(1);

  const isInTimeRange = (value: number): boolean => {
    if (!timeRegExp.test(`${value}`)) return false;
    return true;
  };

  const onChangeTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { value } = e.target;

    // 예를들어, value 가 2인 상태에서 3을 추가로 입력했을 때 23이 아닌 3으로 표시하기 위함
    if (value.length >= 2 && value !== '10') {
      value = value.substring(value.length - 1);
    }
    if (!isInTimeRange(Number(value))) {
      setTime(time);
      return;
    }
    setTime(Number(value));
  };

  const onClickCountButton = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    const { name } = e.currentTarget;
    setTime((prev: number): number => {
      const value = name === UP ? prev + 1 : prev - 1;
      if (!isInTimeRange(value)) {
        return prev;
      }
      return value;
    });
  };

  return (
    <S.TimerContainer>
      <S.CountButton name={DOWN} icon="fas fa-angle-left" onClick={onClickCountButton} />
      <S.Timer
        type="number"
        value={time}
        onChange={onChangeTime}
        onKeyDown={(e) => {
          // 마침표 입력 못하게 막기
          if (e.key === '.') e.preventDefault();
        }}
      />
      <S.CountButton name={UP} icon="fas fa-angle-right" onClick={onClickCountButton} />
    </S.TimerContainer>
  );
}
