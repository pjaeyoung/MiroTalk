import { useEffect, useRef, useState } from 'react';
import * as S from './styles';

interface Question {
  id: number;
  text: string;
  isSelected: boolean;
}
interface QuestionItemProps {
  question: Question;
  deleteQuestion: (id: number) => void;
  editQuestion: (id: number, text: string, isSelected?: boolean) => void;
}

export default function QuestionItem({
  question,
  deleteQuestion,
  editQuestion,
}: QuestionItemProps): JSX.Element {
  const { id, text, isSelected } = question;
  const [selected, setSelected] = useState<boolean>(isSelected);
  const [value, setValue] = useState<string>(text);
  const [editable, setEditable] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>();

  useEffect(() => {
    // editable 상태면 input창에 커서 출력
    if (editable) {
      inputRef.current.focus();
    }
  }, [editable]);

  // 질문 선택여부에 따라 해당 질문 수정
  // useEffect로 따로 빼두지 않고 toggleSelected에서 구현하면 editQuestion 두 번 실행으로 변경사항이 제대로 반영되지 않음
  useEffect(() => {
    editQuestion(id, value, selected);
  }, [selected]);

  // 질문 선택 여부 결정
  const toggleSelected = (e: React.MouseEvent<HTMLLIElement, MouseEvent>): void => {
    const { tagName } = e.target as HTMLLIElement;
    // btn-move 제외 (이벤트 전파)
    if (tagName === 'BUTTON' || tagName === 'path' || tagName === 'I') return;
    setSelected((prev) => !prev);
  };

  // 질문 수정 입력창 : state 처리
  const onChange = (): void => {
    if (!editable) {
      return;
    }
    const { length } = inputRef.current.value;
    if (length > 100) {
      return;
    }
    setValue(inputRef.current.value);
  };

  // 질문 수정 모드 변경
  const toggleEditMode = (toggle: boolean): void => {
    setEditable(toggle);
  };

  // 질문 수정 입력창 : 질문 수정
  const onSubmit = (e: React.KeyboardEvent): void => {
    if (e.key !== 'Enter') {
      return;
    }
    editQuestion(id, value, isSelected);
    toggleEditMode(false);
    inputRef.current.blur();
  };

  // 포커스 해제시 자동 저장
  const onBlur = (): void => {
    editQuestion(id, value);
    toggleEditMode(false);
  };

  // editable이 아닌 상태에서 input창 눌렀을 때 focus 이벤트 방지
  const onFocus = (): void => {
    if (!editable) {
      inputRef.current.blur();
    }
  };
  return (
    <S.QuestionItem editable={editable} selected={selected} onClick={toggleSelected}>
      <S.MoveButton icon="fas fa-grip-vertical" onClick={() => {}} />
      <S.QuestionItemText
        ref={inputRef}
        type="text"
        value={value}
        onFocus={onFocus}
        onChange={onChange}
        onKeyDown={onSubmit}
        onBlur={onBlur}
      />
      <S.HoverMenu>
        <S.EditButton icon="fas fa-edit" onClick={() => toggleEditMode(true)} />
        <S.DeleteButton icon="fas fa-trash" onClick={() => deleteQuestion(id)} />
      </S.HoverMenu>
    </S.QuestionItem>
  );
}
