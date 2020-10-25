import { props } from 'cypress/types/bluebird';
import styled from 'styled-components';
import ModeButton from './ModeButton';

const ModeButtonContainer = styled.div``;

enum MODE {
  VIDEO = 'VideoMode',
  CHAT = 'ChatMode',
}

interface ModeButtonsProps {
  disabled:boolean;
  setMode:(mode:MODE)=>void;
}

export default function ModeButtons({setMode,disabled}:ModeButtonsProps): JSX.Element {
  const onClick = (e:React.MouseEvent<HTMLButtonElement>)=>{
    const target = e.currentTarget as HTMLElement;
    setMode(target.getAttribute('name') as MODE);
  }

  return (
    <ModeButtonContainer>
      <ModeButton name={MODE.VIDEO} disabled={disabled} icon="fas fa-video" text='화상' onClick={onClick} />
      <ModeButton name={MODE.CHAT} disabled={disabled} icon="fas fa-comment" text='채팅' onClick={onClick} />
    </ModeButtonContainer>
  );
}
