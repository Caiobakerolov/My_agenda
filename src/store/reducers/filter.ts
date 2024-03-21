import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import * as enums from '../../utils/enums/task'

type filterState = {
  term: string
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
    }
  }
})

export const { changeTerm } = filterSlice.actions

export default filterSlice.reducer
