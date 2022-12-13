import React from 'react'
import { Card } from '../../components/Card';
import { UserInfo } from '../../components/UserInfo';

import { Header } from '../../components/Header';

import { Container, Column, Title, TitleHighlight } from './styles';

const Feed = () => {
  return (
    <>
        <Header autenticado={true}/>
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
              <TitleHighlight> # RANKING 5 TOP DA SEMANA </TitleHighlight>
                <UserInfo nome="Amanda Ribeiro" image="https://raw.githubusercontent.com/Amanda-ribeiiro/clone-dio/main/108890154.jpg" percentual={25}/>
                <UserInfo nome="Amanda Ribeiro" image="https://raw.githubusercontent.com/Amanda-ribeiiro/clone-dio/main/108890154.jpg" percentual={65}/>
                <UserInfo nome="Amanda Ribeiro" image="https://raw.githubusercontent.com/Amanda-ribeiiro/clone-dio/main/108890154.jpg" percentual={98}/>
                <UserInfo nome="Amanda Ribeiro" image="https://raw.githubusercontent.com/Amanda-ribeiiro/clone-dio/main/108890154.jpg" percentual={43}/>
            </Column>
        </Container>
    </>
  )
}

export { Feed }; 