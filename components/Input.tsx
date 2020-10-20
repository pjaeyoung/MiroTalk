import { FormEvent } from 'react';

interface InputProps {
  name: string;
  value: string;
  placeholder: string;
  onSubmit: (e: FormEvent) => void;
  onChange: (e: FormEvent) => void;
  SubElement: JSX.Element;
}

export default function Input({
  name,
  value,
  placeholder,
  onSubmit,
  onChange,
  SubElement,
}: InputProps): JSX.Element {
  return (
    <form onSubmit={onSubmit}>
      {SubElement}
      <input name={name} value={value} onChange={onChange} placeholder={placeholder} />
    </form>
  );
}
