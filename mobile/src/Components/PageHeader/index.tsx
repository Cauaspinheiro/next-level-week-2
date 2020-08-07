import React from 'react'
import { Image } from 'react-native'
import { Container, TopBar, Title, Header } from './styles'

import backIcon from '../../assets/images/icons/back.png'
import logoImg from '../../assets/images/logo.png'
import { BorderlessButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

export interface PageHeaderProps {
  title: string
  headerRight?: React.ReactNode
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  children,
  headerRight,
}) => {
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

      <Header>
        <Title>{title}</Title>

        {headerRight}
      </Header>

      {children}
    </Container>
  )
}
