import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import Template from 'components/Common/Template';
import RecordList from 'components/Main/RecordList';
import RecordContent from 'components/Main/RecordContent';
import {TableTemplate, CreateHeader} from 'components/Common/TableTemplate';


const RecordWrapper = styled.div`
  width: 80vw;
  min-height: 14rem;
  margin-left: 10vw;
  margin-top: 7vh;
  margin-bottom: 3vh; 
  display: flex;
  flex-direction: row;
  @media (max-width: 750px) {
    min-height: 32vh;
    margin-left: 10%;
    display: grid;
  }
  @media (max-width: 375px) {
    min-height: 16vh;
    margin-left: 10%;
    display: grid;
  }
`;
const TableWrapper = styled.div`
  width: 80%;
  min-height: 20vh;
  color: black;
  font-size: 21px;
  table {
    margin-left: 1.5vw;
    border-top: 1.25px solid #444444;
    table-layout: fixed;
    width: 96%;
    vertical-align : middle;
    text-align: center;
  }
  td {
    padding-top: 2px;
    padding-bottom: 2.5px;
    border-collapse: collapse;
    white-space: normal;
  }
  @media (max-width: 750px) {
    width: 90%;
    margin-left: 3vw;
    font-size: 20px;
  }
  @media (max-width: 550px) {
    width: 72%;
    margin-left: 1rem;
    font-size: 18px;
  }
  @media (max-width: 375px) {
    width: 90%;
    margin-top: 1vh;
    font-size: 16px;
    min-height: 10vh;
    margin-left: 0vw;
    display: grid;
  }
`;

const TableDivider = styled.div`
  margin-top: 3vh;
  margin-left:10vw;
  width: 80vw;
  height: 0.25px;
  background-color: #233660;
  @media (max-width: 750px) {
    width: 80%;
    background-color: white;
    border-bottom: 1.5px dashed;
    margin-left: 10vw;
    margin-top: 0vh;
  }
`;

const Update = styled.text`
  margin-top: 2vh;
  font-size: 20px;
  color: gray;
  width: 80%;
  height: 30%;
  margin-left: 2vw;
  display: grid;
  @media (max-width: 750px) {
   display:none;
  }
`;


const RecordPage: FunctionComponent = () => {

  return (
    <>
      <Template title="Records">
        <RecordList></RecordList>
        <RecordWrapper>
          <RecordContent
            title={'SUAPC 2021 Winter'}
            problem={'https://archive.suapc.kr/2021w/problem/'}
            scoreboard={'https://www.acmicpc.net/contest/spotboard/586'}
          ></RecordContent>
          <TableWrapper>
              <CreateHeader></CreateHeader>
            <TableTemplate
              prize="11"
              team="불건전한 소환사명 123 "
              member="김경민, 김도현, 권찬"
            ></TableTemplate>

            <TableTemplate
              prize="13"
              team="민초의 난"
              member="김기선, 김효원, 정재현"
            ></TableTemplate>

            <TableTemplate
              prize="24"
              team="역시 형이야 구하러 왔구나 아니 나도 잡혔어"
              member="고민재, 권예빈, 박장성"
            ></TableTemplate>
          </TableWrapper>
        </RecordWrapper>
        <TableDivider></TableDivider>
         
         {/*UCPC 2021 예선
         업데이트 예정*/}
         <RecordWrapper>
          <RecordContent
            title={'UCPC 2021 예선'}></RecordContent>
          <TableWrapper>
            <CreateHeader></CreateHeader>

            <TableTemplate
              prize="66"
              team="생수 "
              member="김기선, 김효원, 정재현"
            ></TableTemplate>
            <Update>
              <p>* 문제 및 스코어보드 링크 업데이트 예정입니다.</p>
            </Update>
          </TableWrapper>
        </RecordWrapper>
        <TableDivider></TableDivider>

        {/*SUAPC 2021 Summer*/}
        <RecordWrapper>
          <RecordContent
            title={'SUAPC 2021 Summer'}
            problem={'https://archive.suapc.kr/2021s/problem/'}
            scoreboard={'https://www.acmicpc.net/contest/spotboard/678'}
            ></RecordContent>
          <TableWrapper>
            <CreateHeader></CreateHeader>
            <TableTemplate
              prize="5"
              team="생수 "
              member="김기선, 김효원, 정재현"
            ></TableTemplate>
            <TableTemplate
              prize="6"
              team="우승못하면2학기휴학함"
              member="권찬, 김도현, 박건휘"
            ></TableTemplate>
            <TableTemplate
              prize="28"
              team="엄마야 누나야 강변 살려면 20억"
              member="고민재, 이지은 전지수"
            ></TableTemplate>
          </TableWrapper>
        </RecordWrapper>
        
        <br/><br/>
      </Template>
    </>
  );
};

export default RecordPage;
