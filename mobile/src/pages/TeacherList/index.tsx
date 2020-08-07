import React from 'react'
import { Container, TeacherScroll } from './styles'
import { PageHeader } from '../../Components/PageHeader'
import { TeacherItem } from '../../Components/TeacherItem'

export function TeacherList() {
  return (
    <Container>
      <PageHeader title="Proffys disponíveis" />

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
