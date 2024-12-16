import HomePage from './pages/HomePage'
import './App.scss'
import { useState } from 'react'
import { useRoutes } from 'react-router-dom'
import Layout from './Layout/Layout'
function App() {
   const router = [
    {path:'', element:<Layout/>,children:[
      {path:'',element:<HomePage/>}
    ]}
   ]
   const routerLig = useRoutes(router)
  return (
  <div>{routerLig}</div>
  )
}

export default App
