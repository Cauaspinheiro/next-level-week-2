import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled.View`
  flex: 1
  background-color: #f0f0f7
`

export const TeacherScroll = styled.ScrollView`
  margin-top: -40px;
`

export const SearchForm = styled.View`
  margin-bottom: 8px;
`

export const InputGroup = styled.View`
  flex-direction: row
  justify-content: space-between
`

export const InputBlock = styled.View`
  width: 48%;
`

export const Label = styled.Text`
  color: #d4c2ff
  font-family: Poppins_400Regular
`

export const Input = styled.TextInput`
  height: 54px
  background-color: #fff
  border-radius: 8px
  justify-content: center
  padding-horizontal: 16px
  margin-top: 4px
  margin-bottom: 16px
`

export const SubmitButton = styled(RectButton)`
  background-color: #04d361
  height: 56px
  border-radius: 8px
  flex-direction: row
  justify-content: center
  align-items: center
`

export const SubmitButtonText = styled.Text`
  color: #fff
  font-family: Archivo_700Bold
  font-size: 16px
  margin-left: 16px 
`
