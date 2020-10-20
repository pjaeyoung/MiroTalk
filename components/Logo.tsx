import styled from 'styled-components';

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  min-width: 1rem;

  & > img {
    width: 1.5rem;
  }

  & > span {
    font-size: 1.5rem;
    color: ${(props) => props.theme.color.blue};
    font-family: 'Sansita Swashed', cursive;
  }
`;

export default function Logo(): JSX.Element {
  return (
    <LogoWrapper>
      <img src="logo.png" alt="MiroTalk Logo" />
      <span>MiroTalk</span>
    </LogoWrapper>
  );
}
