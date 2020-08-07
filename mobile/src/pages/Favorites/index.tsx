import React from 'react'
import { View } from 'react-native'
import { Container, TeacherScroll } from './styles'
import { PageHeader } from '../../Components/PageHeader'
import { TeacherItem } from '../../Components/TeacherItem'

export function Favorites() {
  return (
    <Container>
      <PageHeader title="Meus proffys favoritos" />

      <TeacherScroll
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </TeacherScroll>
    </Container>
  )
}
