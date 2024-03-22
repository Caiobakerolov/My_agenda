import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
import { changeFilter } from '../../store/reducers/filter'
import * as enums from '../../utils/enums/task'
import { RootReducer } from '../../store'

export type Props = {
  legend: string
  criterion: 'priority' | 'status' | 'all'
  value?: enums.Priority | enums.Status
}

const FilterCard = ({ legend, criterion, value }: Props) => {
  const dispatch = useDispatch()
  const { filter, tasks } = useSelector((state: RootReducer) => state)

  const checkActive = () => {
    const sameCriterion = filter.criterion === criterion
    const sameValue = filter.value === value

    return sameCriterion && sameValue
  }

  const counterTasks = () => {
    if (criterion === 'all') return tasks.itens.length
    if (criterion === 'priority') {
      return tasks.itens.filter((item) => item.priority === value).length
    }
    if (criterion === 'status') {
      return tasks.itens.filter((item) => item.status === value).length
    }
  }

  const filtering = () => {
    dispatch(
      changeFilter({
        criterion,
        value
      })
    )
  }

  const active = checkActive()
  const counter = counterTasks()

  return (
    <S.Card onClick={filtering} active={active}>
      <S.Counter>{counter}</S.Counter>
      <S.Label>{legend}</S.Label>
    </S.Card>
  )
}

export default FilterCard
