import FilterCard from '../../components/FilterCard'
import * as S from './styles'

const SideBar = () => (
  <S.Aside>
    <div>
      <S.Field type="text" placeholder="Search" />
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

export default SideBar
