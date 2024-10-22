import * as S from './styles'
import NavDropdown from 'react-bootstrap/NavDropdown'

export const Menu = () => {
  return (
    <S.ContainerMenu>
      <S.Menu>
        <S.LinkMenu to='/'>Inicio</S.LinkMenu>
        <S.MenuDropdownLink id='nav-dropdown-dark-example' title='Clubes' menuVariant='dark'>
          <NavDropdown.Item href='#action/3.1'>Brasileirao</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href='#action/3.2'>Premier League</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href='#action/3.3'>La Liga</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href='#action/3.4'>Outras ligas</NavDropdown.Item>
        </S.MenuDropdownLink>
        <S.LinkMenu style={{ marginRight: '50px' }} to='/selecoes'>
          Seleções
        </S.LinkMenu>
        <S.Logo src='https://placehold.co/100' />
        <S.LinkMenu to='/agasalhos'>Agasalhos</S.LinkMenu>
        <S.LinkMenu to='/sobre'>Sobre</S.LinkMenu>
        <S.LinkMenu style={{ marginRight: '50px' }} to='/contato'>
          Contato
        </S.LinkMenu>
      </S.Menu>
    </S.ContainerMenu>
  )
}
