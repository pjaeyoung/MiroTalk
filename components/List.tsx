import { CSSProperties } from 'react';

interface ListProps {
  children: JSX.Element[];
  style: CSSProperties;
}

export default function List({ children, style = '' as CSSProperties }: ListProps): JSX.Element {
  return <ul style={style}>{children}</ul>;
}
