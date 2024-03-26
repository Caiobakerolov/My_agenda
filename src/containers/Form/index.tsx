import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { BtnSave, MainContainer, Title } from '../../styles'
import { Field } from '../../styles'
import { Form, Options, Option } from './styles'
import * as enums from '../../utils/enums/task'
import { register } from '../../store/reducers/tasks'

const Forms = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [priority, setPriority] = useState(enums.Priority.NORMAL)

  const registerTask = (event: FormEvent) => {
    event.preventDefault()

    dispatch(
      register({
        title,
        priority,
        description,
        status: enums.Status.PENDENT
      })
    )
    navigate('/')
  }

  return (
    <MainContainer>
      <Title>New Task</Title>
      <Form onSubmit={registerTask}>
        <Field
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          type="text"
          placeholder="Title"
        />
        <Field
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          as="textarea"
          placeholder="Description task"
        />
        <Options>
          <p>Priority</p>
          {Object.values(enums.Priority).map((priority) => (
            <Option key={priority}>
              <input
                value={priority}
                name="priority"
                type="radio"
                onChange={(event) =>
                  setPriority(event.target.value as enums.Priority)
                }
                id={priority}
                defaultChecked={priority === enums.Priority.NORMAL}
              />{' '}
              <label htmlFor={priority}>{priority}</label>
            </Option>
          ))}

          {/* <label htmlFor="urgent">Urgent</label>
          <input name="priority" type="radio" id="important" />{' '}
          <label htmlFor="urgent">Important</label>
          <input name="priority" type="radio" id="normal" />{' '}
          <label htmlFor="urgent">Normal</label> */}
        </Options>
        <BtnSave type="submit">Register</BtnSave>
      </Form>
    </MainContainer>
  )
}

export default Forms
