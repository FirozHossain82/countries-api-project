// import { useState } from 'react'
import './App.css'
import Countries from './components/Countries/Countries';
// import { useEffect } from 'react';


function App() {
  
  return (
      <div className='container'>
          <Countries></Countries>
      </div>
  )
}

/* function LoadCountries(){
  const [countries, setCountries] = useState([]);
  useEffect(() =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => setCountries(data))
  },[])
  return(
    <div>
          <h1>Visiting Every Country Of The World</h1>
          <h3>Available Countries: {countries.length }</h3>
    </div>
  )
} */

export default App;
