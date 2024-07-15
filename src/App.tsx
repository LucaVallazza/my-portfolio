import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Pana from './pana';
import Header from './header';

function App() {

  const [pana, setPana] = useState<any[]>([]);

  const name = useRef(null)
  const edad = useRef(null)
  const ig = useRef(null)


  const onclick = () => {
    


    console.log(pana)

  }

  return (
    <main className='h-[100vh]'>
      <Header></Header>

    </main>
  )
}

export default App
