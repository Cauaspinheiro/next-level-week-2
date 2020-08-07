import React, { useState } from 'react'
import { Image as RNImage, Linking } from 'react-native'

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png'
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsapp from '../../assets/images/icons/whatsapp.png'
import AsyncStorage from '@react-native-community/async-storage'

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
import api from '../../services/api'

export interface TeacherItemProps {
  teacher: Teacher
  favorited: boolean
}

export const TeacherItem: React.FC<TeacherItemProps> = ({
  teacher,
  favorited,
}) => {
  const [isFavorited, setIsFavorited] = useState(favorited)

  function handleOpenWhatsapp() {
    api.post('connections', {
      user_id: teacher.id
    })

    Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`)
  }

  async function handleToggleFavorited() {
    const favorites = await AsyncStorage.getItem('favorites')

    let favoritesArray: Teacher[] = []

    if (favorites) {
      favoritesArray = JSON.parse(favorites)
    }

    if (isFavorited) {
      const favoriteIndex = favoritesArray.findIndex((teacherItem) => {
        return teacherItem.id === teacher.id
      })

      favoritesArray.splice(favoriteIndex, 1)

      setIsFavorited(false)
    } else {
      favoritesArray.push(teacher)

      setIsFavorited(true)
    }

    await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray))
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
          <FavoriteButton
            onPress={handleToggleFavorited}
            favorited={isFavorited}>
            {isFavorited ? (
              <RNImage source={unfavoriteIcon} />
            ) : (
              <RNImage source={heartOutlineIcon} />
            )}
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
