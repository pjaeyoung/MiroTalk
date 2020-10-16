import { DetailedHTMLProps, InputHTMLAttributes, useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faGripVertical } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/question.module.scss';

type SubmitEvent = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

interface Question {
  id: number;
  text: string;
  isSelected: boolean;
}
interface QuestionListItemProps {
  question: Question;
  deleteQuestion: (id: number) => void;
  editQuestion: (id: number, text: string) => void;
}

export default function QuestionListItem({
  question: { id, text },
  deleteQuestion,
  editQuestion,
}: QuestionListItemProps): JSX.Element {
  const [value, setValue] = useState<string>(text);
  const [editable, setEditable] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>();
  const navRef = useRef<HTMLInputElement>();

  useEffect(() => {
    // editable 상태면 input창에 커서 출력
    if (editable) {
      inputRef.current.focus();
    }
  }, [editable]);

  // 질문 수정 입력창 : state 처리
  const onChange = () => {
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
  const toggleEditMode = (toggle) => {
    setEditable(toggle);
  };

  // 질문 수정 입력창 : 질문 수정
  const onSubmit = (e: SubmitEvent) => {
    if (e.key !== 'Enter') {
      return;
    }
    editQuestion(id, value);
    toggleEditMode(false);
    inputRef.current.blur();
  };

  // 포커스 해제시 자동 저장
  const onBlur = () => {
    editQuestion(id, value);
    toggleEditMode(false);
  };

  // editable이 아닌 상태에서 input창 눌렀을 때 focus 이벤트 방지
  const onFocus = () => {
    if (!editable) {
      inputRef.current.blur();
    }
  };

  return (
    <li className={styles.questionListItem}>
      <button className={`btnMove ${styles.btnMove}`}>
        <FontAwesomeIcon icon={faGripVertical} />
      </button>
      <input
        ref={inputRef}
        value={value}
        onFocus={onFocus}
        onChange={onChange}
        onKeyDown={onSubmit}
        onBlur={onBlur}
      />
      <div ref={navRef} className={styles.contextSensitiveNav}>
        <button className={styles.btnEdit} onClick={() => toggleEditMode(true)}>
          <FontAwesomeIcon icon={faEdit} />
        </button>
        <button
          className={styles.btnDelete}
          onClick={() => {
            deleteQuestion(id);
          }}
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </li>
  );
}
