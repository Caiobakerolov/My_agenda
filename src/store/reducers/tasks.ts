import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Task from '../../models/Task'
import * as enums from '../../utils/enums/task'

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [
    new Task(
      'Study JavaScript',
      enums.Priority.IMPORTANT,
      enums.Status.PENDENT,
      '',
      1
    ),
    new Task(
      'Study TypeScript',
      enums.Priority.URGENT,
      enums.Status.PENDENT,
      'class 2 review module',
      2
    ),
    new Task(
      'Study React',
      enums.Priority.IMPORTANT,
      enums.Status.PENDENT,
      'practice different situation',
      3
    )
  ],
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state = state.filter((task) => task.id !== action.payload)
    }
  }
})

export const { remover } = tasksSlice.actions

export default tasksSlice.reducer
