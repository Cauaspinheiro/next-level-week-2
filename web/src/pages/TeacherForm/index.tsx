import React, { useState } from 'react'

import { PageHeader } from '../../components/PageHeader'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { Select } from '../../components/Select'
import { useHistory } from 'react-router-dom'

import warningIcon from '../../assets/images/icons/warning.svg'

import './styles.css'
import api from '../../services/api'

export function TeacherForm() {
  const history = useHistory()

  const [name, setName] = useState('')
  const [avatar, setAvatar] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [bio, setBio] = useState('')

  const [subject, setSubject] = useState('')
  const [cost, setCost] = useState('')

  const [scheduleItems, setScheduleItems] = useState([
    {
      week_day: 0,
      to: '',
      from: '',
    },
  ])

  function addNewScheduleItem() {
    setScheduleItems([...scheduleItems, { week_day: 0, to: '', from: '' }])
  }

  function setScheduleItemValue(
    position: number,
    field: 'week_day' | 'from' | 'to',
    value: string
  ) {
    const newArray = scheduleItems.map((schedule, index) => {
      if (index === position) {
        return { ...schedule, [field]: value }
      }

      return schedule
    })

    setScheduleItems(newArray)
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    api
      .post('/classes', {
        name,
        avatar,
        whatsapp,
        bio,
        subject,
        cost,
        schedule: scheduleItems,
      })
      .then(() => {
        alert('Cadastro realizado com sucesso!')

        history.push('/')
      })
      .catch(() => {
        alert('Erro no cadastro!')
      })
  }

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incrível que você quer dar aulas"
        description="O primeiro é preencher esse formulário de inscrição"
      />

      <main>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Seus dados</legend>

            <Input
              name="name"
              label="Nome completo"
              value={name}
              onChange={({ target }) => setName(target.value)}
            />

            <Input
              name="avatar"
              label="Avatar"
              value={avatar}
              onChange={({ target }) => setAvatar(target.value)}
            />

            <Input
              type="tel"
              name="whatsapp"
              label="WhatsApp"
              value={whatsapp}
              onChange={({ target }) => setWhatsapp(target.value)}
            />

            <Textarea
              name="bio"
              label="Biografia"
              value={bio}
              onChange={({ target }) => setBio(target.value)}
            />
          </fieldset>

          <fieldset>
            <legend>Sobre a aula</legend>

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

            <Input
              name="cost"
              label="Custo da sua hora por aula"
              value={cost}
              onChange={({ target }) => setCost(target.value)}
            />
          </fieldset>

          <fieldset>
            <legend>
              Horários disponíveis
              <button type="button" onClick={addNewScheduleItem}>
                + Novo horário
              </button>
            </legend>

            {scheduleItems.map((scheduleItem, index) => {
              return (
                <div key={scheduleItem.week_day} className="schedule-item">
                  <Select
                    name="week_day"
                    label="Dia da semana"
                    value={scheduleItem.week_day}
                    onChange={({ target }) => {
                      setScheduleItemValue(index, 'week_day', target.value)
                    }}
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
                    name="from"
                    label="Das"
                    type="time"
                    value={scheduleItem.from}
                    onChange={({ target }) => {
                      setScheduleItemValue(index, 'from', target.value)
                    }}
                  />
                  <Input
                    name="to"
                    label="Até"
                    type="time"
                    value={scheduleItem.to}
                    onChange={({ target }) => {
                      setScheduleItemValue(index, 'to', target.value)
                    }}
                  />
                </div>
              )
            })}
          </fieldset>

          <footer>
            <p>
              <img src={warningIcon} alt="Aviso importante" />
              Importante <br />
              Preencha todos os dados
            </p>

            <button type="submit">Cadastrar</button>
          </footer>
        </form>
      </main>
    </div>
  )
}
