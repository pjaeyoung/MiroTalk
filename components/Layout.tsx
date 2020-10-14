import Loading from './Loading';
import styles from '../styles/header.module.scss';

interface LayoutProps {
  loading: boolean;
  header: JSX.Element;
  children: JSX.Element;
}

export default function Layout({ loading, header, children }: LayoutProps): JSX.Element {
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <header className={styles.headerWrapper}>{header}</header>
          {children}
        </>
      )}
    </>
  );
}
