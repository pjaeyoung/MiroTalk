import { FormEvent, useState, useEffect, ChangeEvent } from 'react';
import { ReactSortable } from 'react-sortablejs';
import styled from 'styled-components';

import * as S from '../components/QuestionCreate';
import { Header, IconButton, Logo, ModeButton, QuestionForm } from '../components';

interface Question {
  id: number;
  text: string;
  isSelected: boolean;
}

const QUESTIONS = 'Questions'; // localStorage key

export default function QuestionCreate(): JSX.Element {
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
        <S.ModeBtnContainer>
          <ModeButton icon="fas fa-video" text="화상" onClick={() => {}} />
          <ModeButton icon="fas fa-comment" text="채팅" onClick={() => {}} />
        </S.ModeBtnContainer>
      </Header>
      <S.Main>
        <QuestionForm onSubmit={onSubmit} onChange={onChange} />
        <ul>
          <li>
            <IconButton icon="fas fa-grip-vertical" onClick={() => {}} />
            <input type="text" value="질문 예제 1" onChange={() => {}} />
            <div>
              <button>
                <i className="fas fa-edit" />
              </button>
              <button>
                <i className="fas fa-trash" />
              </button>
            </div>
          </li>
          <li>
            <button>
              <i className="fas fa-grip-vertical" />
            </button>
            <input type="text" value="질문 예제 1" onChange={() => {}} />
            <div>
              <button>
                <i className="fas fa-edit" />
              </button>
              <button>
                <i className="fas fa-trash" />
              </button>
            </div>
          </li>
        </ul>
      </S.Main>
    </>
  );
}
