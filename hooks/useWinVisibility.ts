import { MutableRefObject, useRef } from 'react';

export default function useWinVisibility(): [
  MutableRefObject<HTMLDivElement>,
  (visible: boolean) => void,
] {
  const winRef = useRef<HTMLDivElement>();

  const setWinVisible = (visible: boolean) => {
    if (visible) {
      winRef.current.style.display = 'grid';
    } else {
      winRef.current.style.display = 'none';
    }
  };

  return [winRef, setWinVisible];
}
