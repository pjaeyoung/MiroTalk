type Question = {
  text: string;
  isSelected: boolean;
};

type QuestionListItemProps = {
  question: Question;
};

export default function QuestionListItem({ question }: QuestionListItemProps): JSX.Element {
  return (
    <li>
      <button>::</button>
      <input />
      <div>
        <button>수정</button>
        <div>|</div>
        <button>삭제</button>
      </div>
    </li>
  );
}
