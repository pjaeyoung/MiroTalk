import { ChangeEvent, FormEvent } from 'react';
import QuestionFormContainer from './style';

interface QuestionFormProps {
  onSubmit: (e: FormEvent) => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function QuestionForm({ onSubmit, onChange }: QuestionFormProps): JSX.Element {
  return (
    <QuestionFormContainer onSubmit={onSubmit}>
      <i className="fas fa-plus" />
      <input
        name="createQuestion"
        autoComplete="off"
        placeholder="100자 이내로 질문을 작성해주세요"
        onChange={onChange}
      />
    </QuestionFormContainer>
  );
}
