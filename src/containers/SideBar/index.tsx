import { useDispatch, useSelector } from 'react-redux'
import FilterCard from '../../components/FilterCard'
import { RootReducer } from '../../store'
import { changeTerm } from '../../store/reducers/filter'
import * as enums from '../../utils/enums/task'
import * as S from './styles'
import { Field } from '../../styles'

const SideBar = () => {
  const dispatch = useDispatch()
  const { term } = useSelector((state: RootReducer) => state.filter)

  return (
    <S.Aside>
      <div>
        <Field
          type="text"
          placeholder="Search"
          value={term}
          onChange={(event) => dispatch(changeTerm(event.target.value))}
        />
        <S.Filters>
          <FilterCard
            value={enums.Status.PENDENT}
            criterion="status"
            legend="Pending"
          />
          <FilterCard
            value={enums.Status.COMPLETED}
            criterion="status"
            legend="Completed"
          />
          <FilterCard
            value={enums.Priority.URGENT}
            criterion="priority"
            legend="Urgent"
          />
          <FilterCard
            value={enums.Priority.IMPORTANT}
            criterion="priority"
            legend="Important"
          />
          <FilterCard
            value={enums.Priority.NORMAL}
            criterion="priority"
            legend="Normal"
          />
          <FilterCard criterion="all" legend="All" />
        </S.Filters>
      </div>
    </S.Aside>
  )
}

export default SideBar
