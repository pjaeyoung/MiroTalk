import { FormEvent } from 'react';

interface InputProps {
  name: string;
  value: string;
  placeholder: string;
  onSubmit: (e: FormEvent) => void;
  onChange: (e: FormEvent) => void;
  SubElement: JSX.Element;
  styles: string;
}

export default function Input({
  name,
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
      <input name={name} value={value} onChange={onChange} placeholder={placeholder} />
    </form>
  );
}
