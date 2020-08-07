import React, { useState } from 'react'
import { AsyncStorage } from 'react-native'
import { Container, TeacherScroll } from './styles'
import { PageHeader } from '../../Components/PageHeader'
import { TeacherItem } from '../../Components/TeacherItem'
import Teacher from '../../entities/Teacher'
import { useFocusEffect } from '@react-navigation/native'

export function Favorites() {
  const [favorites, setFavorites] = useState<Teacher[]>([])

  function loadFavorites() {
    AsyncStorage.getItem('favorites').then((res) => {
      if (res) {
        const favoritedTeachers: Teacher[] = JSON.parse(res)

        setFavorites(favoritedTeachers)
      }
    })
  }

  useFocusEffect(
    React.useCallback(() => {
      loadFavorites()
    }, [])
  )

  return (
    <Container>
      <PageHeader title="Meus proffys favoritos" />

      <TeacherScroll
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}>
        {favorites.map((teacher) => {
          return <TeacherItem key={teacher.id} teacher={teacher} favorited />
        })}
      </TeacherScroll>
    </Container>
  )
}
