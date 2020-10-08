type LayoutProps = {
  header: JSX.Element;
  children: JSX.Element;
};

export default function Layout({ header, children }: LayoutProps): JSX.Element {
  return (
    <div>
      <header>{header}</header>
      {children}
    </div>
  );
}
