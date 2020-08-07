import React, { useEffect, useState } from 'react'
import { Image as RNImage } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import {
  Container,
  Image,
  Title,
  Bold,
  Button,
  ButtonsContainer,
  ButtonText,
  TotalConnections,
} from './styles'

import landingImg from '../../assets/images/landing.png'
import studyIcon from '../../assets/images/icons/study.png'
import giveClassesIcon from '../../assets/images/icons/give-classes.png'
import heartIcon from '../../assets/images/icons/heart.png'
import api from '../../services/api'

export function Landing() {
  const { navigate } = useNavigation()

  const [totalConnections, setTotalConnections] = useState()

  useEffect(() => {
    api.get('/connections').then(({ data }) => setTotalConnections(data.total))
  }, [])

  function handleNavigateToGiveClassesPage() {
    navigate('GiveClasses')
  }

  function handleNavigateToStudyPage() {
    navigate('Study')
  }

  return (
    <Container>
      <Image source={landingImg} />

      <Title>
        Seja bem-vindo, {'\n'}
        <Bold>O que deseja fazer?</Bold>
      </Title>

      <ButtonsContainer>
        <Button onPress={handleNavigateToStudyPage} primary={true}>
          <RNImage source={studyIcon}></RNImage>

          <ButtonText>Estudar</ButtonText>
        </Button>

        <Button onPress={handleNavigateToGiveClassesPage} primary={false}>
          <RNImage source={giveClassesIcon}></RNImage>

          <ButtonText>Dar aulas</ButtonText>
        </Button>
      </ButtonsContainer>

      <TotalConnections>
        Total de {totalConnections} conexões já realizadas{' '}
        <RNImage source={heartIcon}></RNImage>
      </TotalConnections>
    </Container>
  )
}
