import React, { useState, FormEvent } from 'react'

import { PageHeader } from '../../components/PageHeader'

import { TeacherItem, Teacher } from '../../components/TeacherItem'
import { Input } from '../../components/Input'
import { Select } from '../../components/Select'

import './styles.css'
import api from '../../services/api'

export function TeacherList() {
  const [teachers, setTeachers] = useState([])

  const [subject, setSubject] = useState('')
  const [week_day, setWeekDay] = useState('')
  const [time, setTime] = useState('')

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()

    const { data } = await api.get('/classes', {
      params: {
        subject,
        time,
        week_day,
      },
    })

    setTeachers(data)
  }

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers" onSubmit={handleSubmit}>
          <Select
            name="subject"
            label="Matéria"
            value={subject}
            onChange={({ target }) => setSubject(target.value)}
            options={[
              { value: 'Artes', label: 'Artes' },
              { value: 'Biologia', label: 'Biologia' },
              { value: 'Ciências', label: 'Ciências' },
              { value: 'Educação Física', label: 'Educação Física' },
              { value: 'Filosofia', label: 'Filosofia' },
              { value: 'Física', label: 'Física' },
              { value: 'Geografia', label: 'Geografia' },
              { value: 'História', label: 'História' },
              { value: 'Inglês', label: 'Inglês' },
              { value: 'Matemática', label: 'Matemática' },
              { value: 'Português', label: 'Português' },
              { value: 'Química', label: 'Química' },
              { value: 'Sociologia', label: 'Sociologia' },
            ]}
          />

          <Select
            name="week_day"
            label="Dia da semana"
            value={week_day}
            onChange={({ target }) => setWeekDay(target.value)}
            options={[
              { value: '0', label: 'Domingo' },
              { value: '1', label: 'Segunda-feira' },
              { value: '2', label: 'Terça-feira' },
              { value: '3', label: 'Quarta-feira' },
              { value: '4', label: 'Quinta-feira' },
              { value: '5', label: 'Sexta-feira' },
              { value: '6', label: 'Sábado' },
            ]}
          />

          <Input
            type="time"
            name="time"
            label="Hora"
            value={time}
            onChange={({ target }) => setTime(target.value)}
          />

          <button type="submit">Buscar</button>
        </form>
      </PageHeader>

      <main>
        {teachers.map((teacher: Teacher) => {
          return <TeacherItem teacher={teacher} key={teacher.id} />
        })}
      </main>
    </div>
  )
}
