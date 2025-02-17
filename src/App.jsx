import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Analytics from './components/Analytics'
import Newsletter from './components/Newsletter'

function App() {

  return (
    <div className='  '>

<Navbar />
<Hero />
<Analytics />
<Newsletter />

      {/* <h1 className='text-red-500 text'>jhjhg</h1> */}
      

    </div>
  )
}

export default App
