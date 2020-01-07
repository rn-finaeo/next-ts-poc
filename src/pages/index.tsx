import React, { FC } from 'react'
import dynamic from 'next/dynamic'

const Header = dynamic(() => import('../components/header'))

const App: FC = () => (
  <div>
    <Header dummy="world" />
  </div>
)

export default App
