import React from 'react'
import { Image as RNImage } from 'react-native'

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png'
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsapp from '../../assets/images/icons/whatsapp.png'

import {
  Container,
  Profile,
  Avatar,
  ProfileInfo,
  Name,
  Subject,
  Bio,
  PriceValue,
  Price,
  Footer,
  ButtonsContainer,
  ContactButtonText,
  ContactButton,
  FavoriteButton,
} from './styles'

export function TeacherItem() {
  return (
    <Container>
      <Profile>
        <Avatar
          source={{
            uri:
              'https://avatars2.githubusercontent.com/u/4248081?s=400&u=98a643ad7f90c7950d9311e4b5a762fe77af8ada&v=4',
          }}
        />

        <ProfileInfo>
          <Name>Filipe Deschamps</Name>
          <Subject>Química</Subject>
        </ProfileInfo>
      </Profile>

      <Bio>Dou aulas de Typescript.</Bio>

      <Footer>
        <Price>
          Preço/hora {'   '}
          <PriceValue>R$ 20,00</PriceValue>
        </Price>

        <ButtonsContainer>
          <FavoriteButton favorited={false} >
            <RNImage source={heartOutlineIcon} />
          </FavoriteButton>

          <ContactButton>
            <RNImage source={whatsapp} />
            <ContactButtonText>Entrar em contato</ContactButtonText>
          </ContactButton>
        </ButtonsContainer>
      </Footer>
    </Container>
  )
}
