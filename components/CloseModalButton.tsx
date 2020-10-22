import styled from 'styled-components';
import IconButton from './IconButton';

export default styled(IconButton)`
  grid-area: closeBtn;
  justify-self: flex-end;
  align-self: flex-start;
  font-size: 2rem;
  &:active {
    transform: scale(0.8);
  }
`;
