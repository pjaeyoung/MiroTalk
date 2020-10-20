import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const Button = styled.button`
  font-size: 1.5rem;
  border: none;
  background: none;

  & > svg {
    color: ${(props) => props.theme.color.blue};
  }
`;

interface IconButtonProps {
  icon: IconProp;
  onClick: (e: React.MouseEvent) => void;
}

export default function IconButton(props: IconButtonProps): JSX.Element {
  return (
    <Button onClick={props.onClick}>
      <FontAwesomeIcon icon={props.icon} />
    </Button>
  );
}
