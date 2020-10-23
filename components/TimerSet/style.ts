import styled from 'styled-components';
import IconButton from '../IconButton';

export const TimerContainer = styled.div`
  grid-area: timer;
  display: flex;
  width: 40%;
  justify-content: space-between;
  align-items: center;
`;

export const Timer = styled.input`
  height: 5rem;
  width: 5rem;
  text-align: center;
  color: white;
  font-size: 2rem;
  font-weight: bold;
  border-radius: 15%;
  background-color: ${(props) => props.theme.color.blue};
  box-shadow: 3px 2px 5px 1px rgba(0, 0, 0, 0.2);
`;

export const CountButton = styled(IconButton)`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${(props) => props.theme.color.blue};
  border-radius: 50%;
  font-size: 2rem;
  padding: 0.5rem 1rem;

  &:active {
    transform: scale(0.8);
  }
`;
