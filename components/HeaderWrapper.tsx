interface HeaderWrapperProps {
  children: JSX.Element;
}

export default function HeaderWrapper({ children }: HeaderWrapperProps): JSX.Element {
  return <header>{children}</header>;
}
