import HeaderWrapper from './HeaderWrapper';

type LayoutProps = {
  header: JSX.Element;
  children: JSX.Element;
};

export default function Layout({ header, children }: LayoutProps): JSX.Element {
  return (
    <>
      <HeaderWrapper>{header}</HeaderWrapper>
      {children}
    </>
  );
}
