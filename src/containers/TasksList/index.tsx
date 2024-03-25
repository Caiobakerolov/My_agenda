import { useSelector } from 'react-redux'
import Task from '../../components/Task'
import { MainContainer, Title } from '../../styles'
import { RootReducer } from '../../store'

const TasksList = () => {
  const { itens } = useSelector((state: RootReducer) => state.tasks)
  const { term, criterion, value } = useSelector(
    (state: RootReducer) => state.filter
  )

  const filterTasks = () => {
    let tasksFiltered = itens
    if (term !== undefined) {
      tasksFiltered = tasksFiltered.filter(
        (item) => item.title.toLowerCase().search(term.toLowerCase()) >= 0
      )

      if (criterion === 'priority') {
        tasksFiltered = tasksFiltered.filter((item) => item.priority === value)
      } else if (criterion === 'status') {
        tasksFiltered = tasksFiltered.filter((item) => item.status === value)
      }

      return tasksFiltered
    } else {
      return itens
    }
  }

  const showResultFilter = (amount: number) => {
    let message = ''
    const complementation =
      term !== undefined && term.length > 0 ? `e "${term}"` : ''

    if (criterion === 'all') {
      message = `${amount} task(s) found as: all ${complementation}`
    } else {
      message = `${amount} task(s) found as: "${`${criterion}=${value}`}" ${complementation}`
    }

    return message
  }

  const tasks = filterTasks()
  const message = showResultFilter(tasks.length)

  return (
    <MainContainer>
      <Title as="p">{message}</Title>
      <ul>
        {tasks.map((t) => (
          <li key={t.title}>
            <Task
              id={t.id}
              description={t.description}
              title={t.title}
              status={t.status}
              priority={t.priority}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default TasksList
