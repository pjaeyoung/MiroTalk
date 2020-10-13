import { DetailedHTMLProps, FormEvent, InputHTMLAttributes, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

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

interface InputEventTarget extends EventTarget {
  value: string;
}
interface InputEvent extends FormEvent {
  target: InputEventTarget;
}

export default function QuestionListItem({
  question: { id, text },
  deleteQuestion,
  editQuestion,
}: QuestionListItemProps): JSX.Element {
  const [value, setValue] = useState<string>(text);
  const [editable, setEditable] = useState<boolean>(false);

  // 질문 수정 입력창 : state 처리
  const onChange = (e: InputEvent) => {
    if (!editable) {
      return;
    }
    const { length } = e.target.value;
    if (length > 100) {
      return;
    }
    setValue(e.target.value);
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
    setValue(value);
    editQuestion(id, value);
    toggleEditMode(false);
    // css 처리 : 수정/삭제 버튼 감추기
  };

  return (
    <li>
      <button className="btn-move">::</button>
      <input value={value} onChange={onChange} onKeyDown={onSubmit} />
      <div>
        <button onClick={() => toggleEditMode(true)}>
          <FontAwesomeIcon icon={faEdit} />
        </button>
        <button
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
