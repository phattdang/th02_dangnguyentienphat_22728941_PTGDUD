import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BaiTap1 from './components/BaiTap1'
import BaiTap2 from './components/BaiTap2'
import BaiTap3 from './components/BaiTap3'

function App() {
  return (
    <>
      <div>
        <BaiTap1 />
      </div>
      <div>
        <BaiTap2 />
      </div>
      <div>
        <BaiTap3 />
      </div>

    </>
  )
}

export default App
