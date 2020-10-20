import Head from 'next/head';
import QuestionCreate from './QuestionCreate';

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>MiroTalk</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Sansita+Swashed:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <QuestionCreate />
    </>
  );
}
