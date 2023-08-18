import { Outlet } from 'react-router-dom'
import SideMenu from './sidemenu/SideMenu'
import Topbar from './topbar/Topbar'

import './App.css'

function App() {
  return (
    <>
      <div className="container">
        <div className="top">
          <Topbar />
        </div>
        <div className="menu">
          <SideMenu />
        </div>
        <div className="main">
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default App
