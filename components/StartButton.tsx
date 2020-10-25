import Link from 'next/link';
import styled from 'styled-components';

const Button = styled.a`
  grid-area: startBtn;
  background: none;
  border: none;
  border-radius: 0;
  color: ${(props) => props.theme.color.grey};
  font-size: 1.2rem;
  cursor: pointer;
  &:hover{
    color: ${(props) => props.theme.color.blue};
    border-bottom: 1px solid ${(props) => props.theme.color.blue};
  }
  &:active {
    transform: scale(0.8);
  }
`;

interface StartButtonProps{
  href:string;
  children:string;
}

export default function StartButton(props:StartButtonProps):JSX.Element{
  return <Link {...props}><Button className='btn-start'>{props.children}</Button></Link>
}