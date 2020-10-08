type ListProps = {
  children: JSX.Element[];
};

export default function List({ children }: ListProps): JSX.Element {
  return <ul>{children}</ul>;
}
