import QuestionCreate from './QuestionCreate';

export default function Home(): JSX.Element {
  return (
    <>
      <head>
        <title>MiroTalk</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Sansita+Swashed:wght@700&display=swap"
          rel="stylesheet"
        />
      </head>
      <QuestionCreate />
    </>
  );
}
