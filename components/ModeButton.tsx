import styled from 'styled-components';

const Button = styled.button`
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

  &:hover{
    opacity:0.8;
  }

  &:active{
    transform:scale(0.8);
  }
`;

interface ModeButtonProps {
  disabled:boolean;
  name:string;
  text: string;
  icon: string;
  onClick: (e: React.MouseEvent) => void;
}

export default function ModeButton(props: ModeButtonProps): JSX.Element {
  return (
    <Button name={props.name} disabled={props.disabled} onClick={props.onClick}>
      <i className={props.icon} />
      <span>{props.text}</span>
    </Button>
  );
}
