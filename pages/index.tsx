import { useState } from 'react';
import Layout from '../components/Layout';
import { EditHeader } from '../components/Header';
import Input from '../components/Input';
import List from '../components/List';
import QuestionListItem from '../components/QuestionListItem';

type Question = {
  id: number;
  text: string;
  isSelected: boolean;
};

export default function App(): JSX.Element {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [input, setInput] = useState<string>('');
  const onChange = (e) => {
    setInput(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setQuestions((prev) => {
      let lastId = 0;
      if (prev.length !== 0) {
        lastId = prev[prev.length - 1].id + 1;
      }
      return [...prev, { id: lastId, text: input, isSelected: false }];
    });
    setInput('');
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
            <QuestionListItem key={question.id} question={question} />
          ))}
        </List>
      </>
    </Layout>
  );
}
