import React,{ReactNode} from 'react'
import {Footer} from './Footer/Footer'
import {Header} from './header/Header'

interface props {
  children?:ReactNode
}
const Layout = ({children,...props}:props) => {
  return (
    <>
    <Header />
      <main {...props}>
        {children}
      </main>
  <Footer/>
  </>
  )
}

export default Layout
