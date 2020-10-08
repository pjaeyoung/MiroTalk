import { FormEvent } from 'react';

type InputProps = {
  value: string;
  placeholder: string;
  onSubmit: (e: FormEvent) => void;
  onChange: (e: FormEvent) => void;
  SubElement: JSX.Element;
};

export default function Input({
  value,
  placeholder,
  onSubmit,
  onChange,
  SubElement,
}: InputProps): JSX.Element {
  return (
    <form onSubmit={onSubmit}>
      {SubElement}
      <input value={value} onChange={onChange} placeholder={placeholder} />
    </form>
  );
}
