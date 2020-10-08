import { useState } from 'react';
import Layout from '../components/Layout';
import { EditHeader } from '../components/Header';
import Input from '../components/Input';
import List from '../components/List';
import QuestionListItem from '../components/QuestionListItem';

type Question = {
  id: number;
  text: string;
  isSelected: boolean;
};

export default function App(): JSX.Element {
  return (
    <Layout header={<EditHeader />}>
      <>
        <Input
          placeholder="100자 이내로 질문을 작성해주세요"
          SubElement={<span>+</span>}
          value={input}
          onChange={onChange}
          onSubmit={onSubmit}
        />
        <List />
      </>
    </Layout>
  );
}
