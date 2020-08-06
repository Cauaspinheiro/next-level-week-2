import React from 'react'
import {
  Container,
  BackgroundImage,
  Title,
  Description,
  Button,
  OkText,
} from './styles'

import giveClassesBg from '../../assets/images/give-classes-background.png'
import { useNavigation } from '@react-navigation/native'

export function GiveClasses() {
  const { goBack } = useNavigation()

  function HandleNavigateBack() {
    goBack()
  }

  return (
    <Container>
      <BackgroundImage resizeMode="contain" source={giveClassesBg}>
        <Title>Quer ser um Proffy?</Title>
        <Description>
          Para começar, você precisa se cadastrar como professor na nossa
          plataforma web.
        </Description>
      </BackgroundImage>

      <Button onPress={HandleNavigateBack}>
        <OkText>Tudo bem!</OkText>
      </Button>
    </Container>
  )
}
