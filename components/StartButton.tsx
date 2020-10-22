import styled from 'styled-components';

export default styled.button`
  grid-area: startBtn;
  background: none;
  border: none;
  border-radius: 0;
  color: ${(props) => props.theme.color.grey};
  font-size: 1.2rem;
  &:hover {
    color: ${(props) => props.theme.color.blue};
    border-bottom: 1px solid ${(props) => props.theme.color.blue};
  }
  &:active {
    transform: scale(0.8);
  }
`;
