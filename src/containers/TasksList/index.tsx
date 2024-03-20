import { useSelector } from 'react-redux'

import Task from '../../components/Task'
import { Container } from './styles'
// import * as enums from '../../utils/enums/task'
import { RootReducer } from '../../store'

const TasksList = () => {
  const { tasks } = useSelector((state: RootReducer) => state)

  return (
    <Container>
      <p>2 tasks mark as: &quot;Category&ldquo; and &quot;Term&ldquo;</p>
      <ul>
        {tasks.map((t) => (
          <li key={t.title}>
            <Task
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

// const tasks = [
//   {
//     title: 'Study TypeScript',
//     description: 'See classroom 3 of the front-end course',
//     priority: enums.Priority.IMPORTANT,
//     status: enums.Status.PENDENT
//   },
//   {
//     title: 'Pay account internet',
//     description: 'download invoice in e-mail',
//     priority: enums.Priority.URGENT,
//     status: enums.Status.COMPLETED
//   },
//   {
//     title: 'Go to the Gym',
//     description: 'Do training B',
//     priority: enums.Priority.IMPORTANT,
//     status: enums.Status.PENDENT
//   }
// ]
