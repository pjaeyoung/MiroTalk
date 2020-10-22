import { MutableRefObject, useRef } from 'react';

export default function useWinVisibility<T extends HTMLElement>(): [
  MutableRefObject<T>,
  (visible: boolean) => void,
] {
  const winRef = useRef<T>();

  const setWinVisible = (visible: boolean) => {
    if (visible) {
      winRef.current.style.display = 'grid';
    } else {
      winRef.current.style.display = 'none';
    }
  };

  return [winRef, setWinVisible];
}
