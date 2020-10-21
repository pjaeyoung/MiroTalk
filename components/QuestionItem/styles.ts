import styled from 'styled-components';
import IconButton from '../IconButton';

export const MoveButton = styled(IconButton)``;

export const EditButton = styled(IconButton)``;

export const DeleteButton = styled(IconButton)``;

export const QuestionItem = styled.li`
  display: flex;
  align-items: center;
  padding-left: 0.5rem;
  min-height: 3rem;
  margin-bottom: 1rem;
  background-color: white;
  border: 0.1rem solid ${(props) => (props.selected ? props.theme.color.grey : 'none')};

  &:hover div {
    opacity: ${(props) => (props.editable ? '0' : '1')};
  }
`;

export const QuestionItemText = styled.input`
  padding: 0.5rem 0 0.5rem 0.5rem;
  font-size: 1rem;
  width: 100%;
  color: ${(props) => props.theme.color.grey};
`;

export const HoverMenu = styled.div`
  position: relative;
  display: flex;
  background-color: ${(props) => props.theme.color.blue};
  opacity: 0;

  button:first-child > i::after {
    content: '';
    left: 4rem;
    width: 0.2rem;
    height: 1.5rem;
    position: absolute;
    background-color: white;
  }

  i {
    color: white;
    padding: 0.5rem 1rem;
  }
`;
