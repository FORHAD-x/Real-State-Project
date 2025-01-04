import './App.css'
import Companies from './Components/companies/Companies'
import Header from './Components/header/Header'
import Hero from './Components/hero/Hero'
import Residencies from './Components/residencies/Residencies'


function App() {
  return (
    <>
     <div className="app">
      <div>
       <div className='white-gradient'/>
        <Header/>
        <Hero/>
      </div>
      <Companies/>
      <Residencies/>
     </div>
    </>
  )
}

export default App
