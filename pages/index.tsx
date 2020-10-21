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
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
          integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
          crossOrigin="anonymous"
        />
      </Head>
      <QuestionCreate />
    </>
  );
}
