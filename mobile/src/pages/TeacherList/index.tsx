import React, { useState } from 'react'
import {
  Container,
  TeacherScroll,
  SearchForm,
  Label,
  Input,
  InputGroup,
  InputBlock,
  SubmitButton,
  SubmitButtonText,
} from './styles'
import { PageHeader } from '../../Components/PageHeader'
import { TeacherItem } from '../../Components/TeacherItem'
import { BorderlessButton } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'
import api from '../../services/api'
import Teacher from '../../entities/Teacher'

export function TeacherList() {
  const [isFiltersVisible, setIsFiltersVisible] = useState(false)
  const [teachers, setTeachers] = useState<Teacher[]>([])
  const [subject, setSubject] = useState('')
  const [week_day, setWeekDay] = useState('')
  const [time, setTime] = useState('')

  function handleToggleFiltersVisible() {
    setIsFiltersVisible(!isFiltersVisible)
  }

  async function handleSubmit() {
    const { data } = await api.get<Teacher[]>('/classes', {
      params: {
        subject,
        time,
        week_day,
      },
    })

    setTeachers(data)
  }

  return (
    <Container>
      <PageHeader
        title="Proffys disponíveis"
        headerRight={
          <BorderlessButton onPress={handleToggleFiltersVisible}>
            <Feather name="filter" size={20} color="#fff" />
          </BorderlessButton>
        }>
        {isFiltersVisible && (
          <SearchForm>
            <Label>Matéria</Label>
            <Input
              placeholder="Qual a matéria?"
              value={subject}
              onChangeText={setSubject}
            />

            <InputGroup>
              <InputBlock>
                <Label>Dia da semana</Label>
                <Input
                  placeholder="Qual o dia?"
                  value={week_day}
                  onChangeText={setWeekDay}
                />
              </InputBlock>

              <InputBlock>
                <Label>Horário</Label>
                <Input
                  placeholder="Qual horário?"
                  value={time}
                  onChangeText={setTime}
                />
              </InputBlock>
            </InputGroup>

            <SubmitButton onPress={handleSubmit}>
              <SubmitButtonText>Filtrar</SubmitButtonText>
            </SubmitButton>
          </SearchForm>
        )}
      </PageHeader>

      <TeacherScroll
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}>
        {teachers.map((teacher, index) => (
          <TeacherItem key={teacher.id} teacher={teacher} />
        ))}
      </TeacherScroll>
    </Container>
  )
}
