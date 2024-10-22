import { Carrossel } from './components/Carousel'
import { Menu } from './components/Menu'

import * as S from './styles'

function Home() {
  return (
    <>
      <S.Container>
        <Menu />
        <Carrossel />
      </S.Container>
    </>
  )
}

export default Home
