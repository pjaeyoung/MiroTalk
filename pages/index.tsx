import { FormEvent, useState, useEffect } from 'react';
import { ReactSortable } from 'react-sortablejs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Layout from '../components/Layout';
import EditHeader from '../components/EditHeader';
import Input from '../components/Input';
import QuestionListItem from '../components/QuestionListItem';
import styles from '../styles/input.module.scss';

interface Question {
  id: number;
  text: string;
  isSelected: boolean;
}

interface InputEventTarget extends EventTarget {
  value: string;
}
interface InputEvent extends FormEvent {
  target: InputEventTarget;
}

const QUESTIONS = 'Questions'; // localStorage key

export default function App(): JSX.Element {
  const [loading, setLoading] = useState<boolean>(true);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [input, setInput] = useState<string>('');

  // 질문 생성/수정/삭제 할 때마다 localStorage 업데이트
  useEffect(() => {
    localStorage.setItem(QUESTIONS, JSON.stringify(questions));
  }, [questions]);

  // localStorage에서 기존 질문들 가져오기
  useEffect(() => {
    const questionsInLocalStorage = JSON.parse(localStorage.getItem(QUESTIONS)) || [];
    setQuestions(questionsInLocalStorage);
    setLoading(false);
  }, []);

  // 질문 작성 입력창 : state 처리
  const onChange = (e: InputEvent) => {
    const { length } = e.target.value;
    if (length > 100) {
      return;
    }
    setInput(e.target.value);
  };

  // 질문 작성 입력창 : 질문 생성
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
    <Layout loading={loading} header={<EditHeader />}>
      <main className="indexPageMain">
        <Input
          placeholder="100자 이내로 질문을 작성해주세요"
          SubElement={<FontAwesomeIcon icon={faPlus} />}
          value={input}
          onChange={onChange}
          onSubmit={onSubmit}
          styles={styles.questionForm}
        />
        <ReactSortable tag="ul" handle=".btnMove" list={questions} setList={setQuestions}>
          {questions.map((question) => (
            <QuestionListItem
              key={question.id}
              question={question}
              deleteQuestion={deleteQuestion}
              editQuestion={editQuestion}
            />
          ))}
        </ReactSortable>
      </main>
    </Layout>
  );
}
