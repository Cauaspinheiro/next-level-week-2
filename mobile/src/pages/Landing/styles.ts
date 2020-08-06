import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: #8257E5
  justify-content: center
  padding: 40px
`

export const Image = styled.Image`
  width: 100%
  resizeMode: contain
`

export const Title = styled.Text`
  color: #fff
  font-size: 20px
  line-height: 30px
  margin-top: 40px
  font-family: Poppins_400Regular
`

export const Bold = styled.Text`
  font-family: Poppins_600SemiBold;
`

export const ButtonsContainer = styled.View`
  flex-direction: row
  margin-top: 40px
  justify-content: space-between
`

export const Button = styled.TouchableOpacity<{
  primary: boolean
}>`
  height: 150px
  width: 48%
  border-radius: 8px
  padding: 24px
  justify-content: space-between
  background-color: ${props => props.primary ? "#9871f5" : "#04d361"}
`

export const ButtonText = styled.Text`
  font-family: Archivo_700Bold
  color: #fff
  font-size: 16px
`

export const TotalConnections = styled.Text`
  font-Family: Poppins_400Regular
  color: #d4c2ff
  font-size: 12px
  line-height: 20px
  max-width: 140px
  margin-top: 40px
  margin-top: 40px
`
