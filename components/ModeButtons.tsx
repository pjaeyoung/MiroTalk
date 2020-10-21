import styled from 'styled-components';
import ModeButton from './ModeButton';

const ModeButtonContainer = styled.div``;

export default function ModeButtons(): JSX.Element {
  return (
    <ModeButtonContainer>
      <ModeButton icon="fas fa-video" text="화상" onClick={() => {}} />
      <ModeButton icon="fas fa-comment" text="채팅" onClick={() => {}} />
    </ModeButtonContainer>
  );
}
