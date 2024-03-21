import { useDispatch, useSelector } from 'react-redux'
import FilterCard from '../../components/FilterCard'
import * as S from './styles'
import { RootReducer } from '../../store'
import { changeTerm } from '../../store/reducers/filter'

const SideBar = () => {
  const dispatch = useDispatch()
  const { term } = useSelector((state: RootReducer) => state.filter)

  return (
    <S.Aside>
      <div>
        <S.Field
          type="text"
          placeholder="Search"
          value={term}
          onChange={(event) => dispatch(changeTerm(event.target.value))}
        />
        <S.Filters>
          <FilterCard legend="Pending" counter={1} />
          <FilterCard legend="Completed" counter={2} />
          <FilterCard legend="Urgent" counter={3} />
          <FilterCard legend="Important" counter={4} />
          <FilterCard legend="Normal" counter={5} />
          <FilterCard legend="All" counter={6} active={true} />
        </S.Filters>
      </div>
    </S.Aside>
  )
}

export default SideBar
