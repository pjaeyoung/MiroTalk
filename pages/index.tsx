import { FormEvent, useState } from 'react';
import Layout from '../components/Layout';
import EditHeader from '../components/EditHeader';
import Input from '../components/Input';
import List from '../components/List';
import QuestionListItem from '../components/QuestionListItem';

type Question = {
  id: number;
  text: string;
  isSelected: boolean;
};

interface InputEventTarget extends EventTarget {
  value: string;
}
interface InputEvent extends FormEvent {
  target: InputEventTarget;
}

export default function App(): JSX.Element {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [input, setInput] = useState<string>('');
  const onChange = (e: InputEvent) => {
    setInput(e.target.value);
  };
  const onSubmit = (e: FormEvent): void => {
    e.preventDefault();
    if (input.length === 0) {
      return;
    }

    setQuestions((prev) => {
      let lastId = 0;
      if (prev.length !== 0) {
        lastId = prev[prev.length - 1].id + 1;
      }
      return [...prev, { id: lastId, text: input, isSelected: false }];
    });
    setInput('');
  };

  const deleteQuestion = (id: number): void => {
    setQuestions((prev) => prev.filter((question) => question.id !== id));
  };

  const editQuestion = (id: number, text: string): void => {
    setQuestions((prev) => {
      const index = prev.findIndex((question) => question.id === id);
      return [...prev.slice(0, index), { id, text, isSelected: false }, ...prev.slice(index + 1)];
    });
  };

  return (
    <Layout header={<EditHeader />}>
      <>
        <Input
          placeholder="100자 이내로 질문을 작성해주세요"
          SubElement={<span>+</span>}
          value={input}
          onChange={onChange}
          onSubmit={onSubmit}
        />
        <List>
          {questions.map((question) => (
            <QuestionListItem
              key={question.id}
              question={question}
              deleteQuestion={deleteQuestion}
              editQuestion={editQuestion}
            />
          ))}
        </List>
      </>
    </Layout>
  );
}
