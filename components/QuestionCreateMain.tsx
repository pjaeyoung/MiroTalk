import styled from 'styled-components';

export default styled.main`
  padding: 5rem 10%;
  min-height: 100vh;
  max-width: 100vw;
  background-color: ${(props) => props.theme.color.background};
`;
