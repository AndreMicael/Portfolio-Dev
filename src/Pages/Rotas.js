import React from 'react'
import { Outlet } from 'react-router-dom'
import { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext'

export const Rotas = ( ) => {
  const {theme} = useContext(ThemeContext)
  return (
   <div className={ theme==="modo-escuro" ? "modo-escuro" : "modo-claro" }>
   <Outlet></Outlet>
   </div>
  )
}
export default Rotas; 
