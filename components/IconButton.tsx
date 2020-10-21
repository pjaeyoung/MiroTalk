import styled from 'styled-components';

const Button = styled.button`
  font-size: 1.5rem;
  border: none;
  background: none;

  & > i {
    color: ${(props) => props.theme.color.blue};
  }
`;

interface IconButtonProps {
  icon: string;
  onClick: (e: React.MouseEvent) => void;
}

export default function IconButton(props: IconButtonProps): JSX.Element {
  return (
    <Button onClick={props.onClick}>
      <i className={props.icon} />
    </Button>
  );
}
