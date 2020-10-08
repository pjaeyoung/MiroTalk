type Question = {
  id: number;
  text: string;
  isSelected: boolean;
};

type QuestionListItemProps = {
  question: Question;
  deleteQuestion: (id: number) => void;
};

export default function QuestionListItem({
  question: { id, text },
  deleteQuestion,
}: QuestionListItemProps): JSX.Element {
  return (
    <li>
      <button>::</button>
      <input value={text} />
      <div>
        <button>수정</button>
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
