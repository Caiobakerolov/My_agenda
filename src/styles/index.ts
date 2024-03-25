import styled, { createGlobalStyle } from 'styled-components'
import variables from './variables'
import { Btn } from '../components/Task/styles'

const StyleGlobal = createGlobalStyle`
  * {
    margin:0;
    padding:0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style:none;
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`

export const MainContainer = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;
`
export const Title = styled.h2`
  display: block;
  margin-top: 40px;
  margin-bottom: 40px;
  font-size: 18px;
  font-weight: bold;
`

export const Field = styled.input`
  padding: 8px;
  background-color: #fff;
  border-radius: 8px;
  font-weight: bold;
  color: #666;
  border-color: #666;
  width: 100%;
  border: 1px solid #5e5e5e;
`

export const BtnSave = styled(Btn)`
  background-color: ${variables.green};
`

export default StyleGlobal
