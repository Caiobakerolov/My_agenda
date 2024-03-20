import { Provider } from 'react-redux'
import SideBar from './containers/SideBar'
import TasksList from './containers/TasksList'
import StyleGlobal, { Container } from './styles'
import store from './store/index'

function App() {
  return (
    <Provider store={store}>
      <StyleGlobal />
      <Container>
        <SideBar />
        <TasksList />
      </Container>
    </Provider>
  )
}

export default App
