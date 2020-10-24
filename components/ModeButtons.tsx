import styled from 'styled-components';
import ModeButton from './ModeButton';

const ModeButtonContainer = styled.div``;

enum MODE {
  VIDEO = '화상',
  CHAT = '채팅',
}

interface ModeButtonsProps {
  setMode:(mode:MODE)=>void;
}

export default function ModeButtons({setMode}:ModeButtonsProps): JSX.Element {
  const onClick = (e:React.MouseEvent<HTMLButtonElement>)=>{
    const target = e.target as HTMLButtonElement;
    setMode(target.textContent as MODE);
  }
  return (
    <ModeButtonContainer>
      <ModeButton icon="fas fa-video" text={MODE.VIDEO} onClick={onClick} />
      <ModeButton icon="fas fa-comment" text={MODE.CHAT} onClick={onClick} />
    </ModeButtonContainer>
  );
}
