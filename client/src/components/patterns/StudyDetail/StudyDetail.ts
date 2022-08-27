import React from 'react';
import {Layout, ImageBox, Image, TextBox, Title, Writer, Description} from './StudyDetail.styles';

export interface StudyCardProps {
  image?: string;
  title: string;
  writer: string;
  description: string;
}


const StudyDetail = () => {
  return (
    <Layout>
    </Layout>
  );
};

export default StudyDetail;

// <Layout>
// <Header>
//   // <DueDate>
//   //   <Label>디데이</Label>
//   //   <DueDateDescription>7월 16일 마감</DueDateDescription>
//   // </DueDate>
//   // <WriterInfo>
//   //   <Avatar />
//   //   <WriterId>하이</WriterId>
//   //   <WriterJob>디자이너</WriterJob>
//   // </WriterInfo>
// </Header>
// </Layout>
