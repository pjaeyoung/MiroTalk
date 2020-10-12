import HeaderWrapper from './HeaderWrapper';
import Loading from './Loading';

type LayoutProps = {
  loading: boolean;
  header: JSX.Element;
  children: JSX.Element;
};

export default function Layout({ loading, header, children }: LayoutProps): JSX.Element {
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <HeaderWrapper>{header}</HeaderWrapper>
          {children}
        </>
      )}
    </>
  );
}
