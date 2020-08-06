import React from 'react'
import { Image } from 'react-native'
import { Container, TopBar, Title } from './styles'

import backIcon from '../../assets/images/icons/back.png'
import logoImg from '../../assets/images/logo.png'
import { BorderlessButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

export interface PageHeaderProps {
  title: string
}

export const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {
  const { navigate } = useNavigation()

  function handleGoBack() {
    navigate('Landing')
  }

  return (
    <Container>
      <TopBar>
        <BorderlessButton onPress={handleGoBack}>
          <Image source={backIcon} resizeMode="contain" />
        </BorderlessButton>

        <Image source={logoImg} resizeMode="contain" />
      </TopBar>

      <Title>{title}</Title>
    </Container>
  )
}
