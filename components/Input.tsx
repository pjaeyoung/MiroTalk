import { FormEvent } from 'react';

type Styles = string;

interface InputProps {
  value: string;
  placeholder: string;
  onSubmit: (e: FormEvent) => void;
  onChange: (e: FormEvent) => void;
  SubElement: JSX.Element;
  styles: Styles;
}

export default function Input({
  value,
  placeholder,
  onSubmit,
  onChange,
  SubElement,
  styles,
}: InputProps): JSX.Element {
  return (
    <form className={styles} onSubmit={onSubmit}>
      {SubElement}
      <input value={value} onChange={onChange} placeholder={placeholder} />
    </form>
  );
}
