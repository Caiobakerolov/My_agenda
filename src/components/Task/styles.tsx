import styled from 'styled-components'
import variables from '../../styles/variables'
import * as enums from '../../utils/enums/task'

type TagProps = {
  priority?: enums.Priority
  status?: enums.Status
  parameter: 'status' | 'priority'
}

function returnBackground(props: TagProps): string {
  if (props.parameter === 'priority') {
    if (props.priority === enums.Priority.URGENT) return variables.red
    if (props.priority === enums.Priority.IMPORTANT) return variables.yellow2
  } else {
    if (props.status === enums.Status.PENDENT) return variables.yellow
    if (props.status === enums.Status.COMPLETED) return variables.green
  }

  return `#ccc`
}

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;
`

export const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
`

export const Tag = styled.span<TagProps>`
  padding: 4px 8px;
  color: #fff;
  font-size: 10px;
  font-weight: bold;
  background-color: ${(props) => returnBackground(props)};
  border-radius: 8px;
  margin-right: 16px;
  display: inline-block;
`

export const Description = styled.textarea`
  color: #8b8b8b;
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  display: block;
  width: 100%;
  margin-bottom: 16px;
  margin-top: 16px;
  resize: none;
  border: none;
  background-color: transparent;
`

export const BarActions = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`

export const Btn = styled.button`
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: #2f3640;
  border-radius: 8px;
  margin-right: 8px;
`
export const BtnSave = styled(Btn)`
  background-color: ${variables.green};
`

export const BtnCancelRemove = styled(Btn)`
  background-color: ${variables.red};
`
