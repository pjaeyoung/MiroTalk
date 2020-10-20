import styled from 'styled-components';

export default styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-height: 10vh;
  min-height: 5rem;
  padding: 0 2rem;
  background-color: ${(props) => props.theme.color.header};
`;
