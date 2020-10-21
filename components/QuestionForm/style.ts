import styled from 'styled-components';

export default styled.form`
  display: flex;
  align-items: center;
  height: 5rem;
  padding: 1rem 1.5rem;

  & > i {
    font-size: 1.5rem;
    color: ${(props) => props.theme.color.blue};
  }

  & > input {
    width: 100%;
    height: 100%;
    padding-left: 1rem;
    font-size: 1rem;
    background: none;
    border-bottom: 1px solid ${(props) => props.theme.color.grey};
  }
`;
