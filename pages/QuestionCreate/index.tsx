import { FormEvent, useState, useEffect } from 'react';
import { ReactSortable } from 'react-sortablejs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import {
  faBars,
  faComment,
  faEdit,
  faGripVertical,
  faPlus,
  faTrash,
  faVideo,
} from '@fortawesome/free-solid-svg-icons';

interface Question {
  id: number;
  text: string;
  isSelected: boolean;
}

const Main = styled.main`
  padding: 10rem 15rem;
  min-height: 100vh;
  min-width: 680px;
  background-color: ${(props) => props.theme.color.background};
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-height: 10vh;
  min-height: 5rem;
  padding: 0 2rem;
  background-color: ${(props) => props.theme.color.header};
`;

const NavButton = styled.button`
  font-size: 1.5rem;
  border: none;
  background: none;

  & > svg {
    color: ${(props) => props.theme.color.blue};
  }
`;

const ModeBtnContainer = styled.div``;

const ModeBtn = styled.button`
  color: white;
  background-color: ${(props) => props.theme.color.blue};
  border: none;
  padding: 1rem 1.5rem;
  font-size: 1rem;

  &:last-of-type {
    margin-left: 0.5rem;
  }

  & > span {
    margin-left: 0.5rem;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  min-width: 1rem;

  & > img {
    width: 1.5rem;
  }

  & > span {
    font-size: 1.5rem;
    color: ${(props) => props.theme.color.blue};
    font-family: 'Sansita Swashed', cursive;
  }
`;

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
  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
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
        <NavButton>
          <FontAwesomeIcon icon={faBars} />
        </NavButton>
        <Logo>
          <img src="logo.png" alt="MiroTalk Logo" />
          <span>MiroTalk</span>
        </Logo>
        <ModeBtnContainer>
          <ModeBtn>
            <FontAwesomeIcon icon={faVideo} />
            <span>녹화</span>
          </ModeBtn>
          <ModeBtn>
            <FontAwesomeIcon icon={faComment} />
            <span>채팅</span>
          </ModeBtn>
        </ModeBtnContainer>
      </Header>
      <Main>
        <section>
          <form onSubmit={onSubmit}>
            <FontAwesomeIcon icon={faPlus} />
            <input name="createQuestion" placeholder="100자 이내로 질문을 작성해주세요" />
          </form>
        </section>
        <section>
          <ul>
            <li>
              <button>
                <FontAwesomeIcon icon={faGripVertical} />
              </button>
              <input type="text" value="질문 예제 1" onChange={() => {}} />
              <div>
                <button>
                  <FontAwesomeIcon icon={faEdit} />
                </button>
                <button>
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            </li>
            <li>
              <button>
                <FontAwesomeIcon icon={faGripVertical} />
              </button>
              <input type="text" value="질문 예제 1" onChange={() => {}} />
              <div>
                <button>
                  <FontAwesomeIcon icon={faEdit} />
                </button>
                <button>
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            </li>
          </ul>
        </section>
      </Main>
    </>
  );
}
