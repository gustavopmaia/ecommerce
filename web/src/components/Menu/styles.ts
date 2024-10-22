import { NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Logo = styled.img`
  width: 100px;
`

export const Menu = styled.div`
  display: flex;
  gap: 1rem;
  font-family: 'Roboto', sans-serif;
  height: 120px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  background-color: #ccc;
`

export const LinkMenu = styled(Link)`
  text-decoration: none;
  color: black;
  margin-left: 50px;
  font-weight: 500;
  font-size: 1.2rem;
  &:hover {
    color: #007bff;
  }
`

export const ContainerMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`

export const MenuDropdownLink = styled(NavDropdown)`
  text-decoration: none;
  color: black;
  font-weight: 500;
  font-size: 1.2rem;
  margin-left: 50px;
  &:hover {
    color: #007bff;
  }
`
