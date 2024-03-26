import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import * as enums from '../../utils/enums/task'

type filterState = {
  term?: string
  criterion: 'priority' | 'status' | 'all'
  value?: enums.Priority | enums.Status
}

const initialState: filterState = {
  term: '',
  criterion: 'all'
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeTerm: (state, action: PayloadAction<string>) => {
      state.term = action.payload
    },
    changeFilter: (state, action: PayloadAction<filterState>) => {
      state.criterion = action.payload.criterion
      state.value = action.payload.value
    }
  }
})

export const { changeTerm, changeFilter } = filterSlice.actions

export default filterSlice.reducer
