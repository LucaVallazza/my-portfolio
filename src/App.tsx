import AboutMe from './about-me';
import './App.css'
import Header from './header';
import Projects from './projects';
import Skills from './skills';

function App() {
  


  return (
    <main className='h-full w-full flex flex-col items-center bg-slate-900'>
      <div className='lg:w-[80%] shadow-2xl shadow-black'>

        <Header ></Header>
        <Skills></Skills>
        <AboutMe></AboutMe>
        <Projects></Projects>
      </div>
    </main>
  )
}

export default App
