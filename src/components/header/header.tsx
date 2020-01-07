import React, { FC } from 'react'
import styled from 'styled-components'

interface HProps {
  dummy: string
}

const Container = styled.div`
  background-color: black;
  color: #fff;
`

const Header: FC<HProps> = ({ dummy }) => <Container>Hello {dummy}</Container>

export default Header
