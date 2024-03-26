import { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import { Btn, BtnSave } from '../../styles'
import { remover, edit, changeStatus } from '../../store/reducers/tasks'
import TaskClass from '../../models/Task'
import * as enums from '../../utils/enums/task'

type Props = TaskClass

const Task = ({
  description: descriptionOriginal,
  priority,
  status,
  title,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [isEditing, setIsEditing] = useState(false)
  const [description, setDescription] = useState('')

  useEffect(() => {
    if (descriptionOriginal.length > 0) {
      setDescription(descriptionOriginal)
    }
  }, [descriptionOriginal])

  function cancelEdition() {
    setIsEditing(false)
    setDescription(descriptionOriginal)
  }

  function changeStatusTask(event: ChangeEvent<HTMLInputElement>) {
    dispatch(
      changeStatus({
        id,
        finalized: event.target.checked
      })
    )
  }

  return (
    <S.Card>
      <label htmlFor={title}>
        <input
          type="checkbox"
          id={title}
          checked={status === enums.Status.COMPLETED}
          onChange={changeStatusTask}
        />
        <S.Title>
          {isEditing ? <em>Editing: </em> : ''}
          {title}
        </S.Title>
      </label>
      <S.Tag parameter="priority" priority={priority}>
        {priority}
      </S.Tag>
      <S.Tag parameter="status" status={status}>
        {status}
      </S.Tag>
      <S.Description
        disabled={!isEditing}
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <S.BarActions>
        {isEditing ? (
          <>
            <BtnSave
              onClick={() => {
                dispatch(
                  edit({
                    description,
                    priority,
                    status,
                    title,
                    id
                  })
                )
                setIsEditing(false)
              }}
            >
              Save
            </BtnSave>
            <S.BtnCancelRemove onClick={cancelEdition}>
              Cancel
            </S.BtnCancelRemove>
          </>
        ) : (
          <>
            <Btn onClick={() => setIsEditing(true)}>Edit</Btn>
            <S.BtnCancelRemove onClick={() => dispatch(remover(id))}>
              Remove
            </S.BtnCancelRemove>
          </>
        )}
      </S.BarActions>
    </S.Card>
  )
}

export default Task
