import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
`;

interface ModeButtonProps {
  text: string;
  icon: IconProp;
  onClick: (e: React.MouseEvent) => void;
}

export default function ModeButton(props: ModeButtonProps): JSX.Element {
  return (
    <Button onClick={props.onClick}>
      <FontAwesomeIcon icon={props.icon} />
      <span>{props.text}</span>
    </Button>
  );
}
