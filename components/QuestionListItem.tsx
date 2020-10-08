import { DetailedHTMLProps, FormEvent, InputHTMLAttributes, useState } from 'react';

type Question = {
  id: number;
  text: string;
  isSelected: boolean;
};

type QuestionListItemProps = {
  question: Question;
  deleteQuestion: (id: number) => void;
  editQuestion: (id: number, text: string) => void;
};

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
  const toggleEditMode = (toggle) => {
    setEditable(toggle);
  };

  const onSubmit = (
    e: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  ) => {
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
      <button>::</button>
      <input value={value} onChange={onChange} onKeyDown={onSubmit} />
      <div>
        <button onClick={() => toggleEditMode(true)}>수정</button>
        <div>|</div>
        <button
          onClick={() => {
            deleteQuestion(id);
          }}
        >
          삭제
        </button>
      </div>
    </li>
  );
}
