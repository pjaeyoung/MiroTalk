import { FormEvent, useState, useEffect, ChangeEvent } from 'react';
import { css } from 'styled-components';
import { useWinVisibility } from '../hooks';
import {
  Header,
  IconButton,
  Logo,
  StartButton,
  ModeButtons,
  QuestionForm,
  QuestionItem,
  QuestionGroup,
  QuestionCreateMain,
  Modal,
  ModalTitle,
  CloseModalButton,
  TimerSet,
} from '../components';

const GridTemplate = css`
  grid-template-rows: 1fr 1fr 3fr 1fr;
  grid-template-areas:
    'closeBtn'
    'title'
    'timer'
    'startBtn';
`;

interface Question {
  id: number;
  text: string;
  isSelected: boolean;
}

enum MODE {
  VIDEO = 'VideoMode',
  CHAT = 'ChatMode',
}

const QUESTIONS = 'Questions'; // localStorage key

export default function QuestionCreate(): JSX.Element {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [input, setInput] = useState<string>('');
  const [winRef, setWinVisible] = useWinVisibility<HTMLDivElement>('flex');
  const [mode, setMode] = useState<MODE>(MODE.VIDEO);

  // 질문 생성/수정/삭제 할 때마다 localStorage 업데이트
  useEffect(() => {
    localStorage.setItem(QUESTIONS, JSON.stringify(questions));
  }, [questions]);

  // localStorage에서 기존 질문들 가져오기
  useEffect(() => {
    const questionsInLocalStorage = JSON.parse(localStorage.getItem(QUESTIONS)) || [];
    setQuestions(questionsInLocalStorage);
  }, []);

  // 질문 작성 입력창 : state 처리
  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    if (value.length > 100) {
      return;
    }
    setInput(value);
  };
  // 질문 작성 입력창 : 질문 생성
  const onSubmit = (e: FormEvent): void => {
    e.preventDefault();
    if (input.length === 0) {
      return;
    }

    setQuestions((prev: Question[]) => {
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

  const editQuestion = (id: number, text: string, isSelected = false): void => {
    setQuestions((prev) => {
      const index = prev.findIndex((question) => question.id === id);
      return [...prev.slice(0, index), { id, text, isSelected }, ...prev.slice(index + 1)];
    });
  };

  return (
    <>
      <Header>
        <IconButton icon="fas fa-bars" onClick={() => {}} />
        <Logo />
        <ModeButtons disabled={questions.length === 0} setMode={(mode:MODE)=>{setWinVisible(true); setMode(mode);}} />
      </Header>
      <QuestionCreateMain>
        <QuestionForm value={input} onSubmit={onSubmit} onChange={onChange} />
        <QuestionGroup tag="ul" list={questions} setList={setQuestions}>
          {questions.map((question) => (
            <QuestionItem
              key={question.id}
              question={question}
              editQuestion={editQuestion}
              deleteQuestion={deleteQuestion}
            />
          ))}
        </QuestionGroup>
      </QuestionCreateMain>
      <Modal ref={winRef} gridTemplate={GridTemplate}>
        <CloseModalButton
          className='btn-close'
          icon="fas fa-times"
          onClick={() => {
            setWinVisible(false);
          }}
        />
        <ModalTitle>제한 시간을 정하세요</ModalTitle>
        <TimerSet />
        <StartButton className='btn-start' href={`/${mode}`}><a>시작하기</a></StartButton>
      </Modal>
    </>
  );
}
