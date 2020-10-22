import styled from 'styled-components';

interface IconButtonProps {
  className?: string;
  icon: string;
  onClick: (e: React.MouseEvent) => void;
}

const Button = styled.button`
  font-size: 1.5rem;
  border: none;
  background: none;
  color: ${(props) => props.theme.color.blue};
`;

export default function IconButton(props: IconButtonProps): JSX.Element {
  return (
    <Button className={props.className} onClick={props.onClick}>
      <i className={props.icon} />
    </Button>
  );
}

IconButton.defaultProps = {
  className: '',
};
