import React from 'react'
import { Image as RNImage, Linking } from 'react-native'

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
import Teacher from '../../entities/Teacher'

export interface TeacherItemProps {
  teacher: Teacher
}

export const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
  function handleOpenWhatsapp() {
    Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`)
  }

  return (
    <Container>
      <Profile>
        <Avatar
          source={{
            uri: teacher.avatar,
          }}
        />

        <ProfileInfo>
          <Name>{teacher.name}</Name>
          <Subject>{teacher.subject}</Subject>
        </ProfileInfo>
      </Profile>

      <Bio>{teacher.bio}</Bio>

      <Footer>
        <Price>
          Preço/hora {'   '}
          <PriceValue>R$ {teacher.cost}</PriceValue>
        </Price>

        <ButtonsContainer>
          <FavoriteButton favorited={false}>
            <RNImage source={heartOutlineIcon} />
          </FavoriteButton>

          <ContactButton onPress={handleOpenWhatsapp}>
            <RNImage source={whatsapp} />
            <ContactButtonText>Entrar em contato</ContactButtonText>
          </ContactButton>
        </ButtonsContainer>
      </Footer>
    </Container>
  )
}
