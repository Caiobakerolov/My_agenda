import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Task from '../../models/Task'
import * as enums from '../../utils/enums/task'

type TasksState = {
  itens: Task[]
}

const initialState: TasksState = {
  itens: [
    {
      id: 1,
      description: 'Study JavaScript',
      priority: enums.Priority.NORMAL,
      status: enums.Status.COMPLETED,
      title: 'Study Hard JavaScript'
    },
    {
      id: 2,
      description: 'Study TypeScript',
      priority: enums.Priority.URGENT,
      status: enums.Status.PENDENT,
      title: 'class 2 review module'
    },
    {
      id: 3,
      description: 'Study React',
      priority: enums.Priority.IMPORTANT,
      status: enums.Status.PENDENT,
      title: 'practice different situation TypeScript'
    }
  ]
}

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...state.itens.filter((task) => task.id !== action.payload)
      ]
    },
    edit: (state, action: PayloadAction<Task>) => {
      const indexTask = state.itens.findIndex((t) => t.id === action.payload.id)

      if (indexTask >= 0) {
        state.itens[indexTask] = action.payload
      }
    },
    register: (state, action: PayloadAction<Task>) => {
      const TaskExists = state.itens.find(
        (task) =>
          task.title.toLowerCase() === action.payload.title.toLowerCase()
      )

      if (TaskExists) {
        alert('There is already a task with that name')
      } else {
        state.itens.push(action.payload)
      }
    }
  }
})

export const { remover, edit, register } = tasksSlice.actions

export default tasksSlice.reducer
