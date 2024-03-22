import { useSelector } from 'react-redux'
import Task from '../../components/Task'
import { Container } from './styles'
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

  return (
    <Container>
      <p>2 tasks mark as: &quot;Category&ldquo; and &quot;{term}&ldquo;</p>
      <ul>
        <li>{term}</li>
        <li>{criterion}</li>
        <li>{value}</li>
      </ul>
      <ul>
        {filterTasks().map((t) => (
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
    </Container>
  )
}

export default TasksList
