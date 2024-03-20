import { useState } from 'react'
import * as S from './styles'
import * as enums from '../../utils/enums/task'

type Props = {
  title: string
  priority: enums.Priority
  status: enums.Status
  description: string
}

const Task = ({ description, priority, status, title }: Props) => {
  const [isEditing, setIsEditing] = useState(false)

  return (
    <S.Card>
      <S.Title>{title}</S.Title>
      <S.Tag parameter="priority" priority={priority}>
        {priority}
      </S.Tag>
      <S.Tag parameter="status" status={status}>
        {status}
      </S.Tag>
      <S.Description value={description} />
      <S.BarActions>
        {isEditing ? (
          <>
            <S.BtnSave>Save</S.BtnSave>
            <S.BtnCancelRemove onClick={() => setIsEditing(false)}>
              Cancel
            </S.BtnCancelRemove>
          </>
        ) : (
          <>
            <S.Btn onClick={() => setIsEditing(true)}>Edit</S.Btn>
            <S.BtnCancelRemove>Remove</S.BtnCancelRemove>
          </>
        )}
      </S.BarActions>
    </S.Card>
  )
}

export default Task
