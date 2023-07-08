import React, { useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [data,setData] = useState ({})
  const [location,setLocation]= useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=47d5768e33144d7610e69d369edbe693`

const searchLocation = (event) => {
  if (event.key === 'Enter') {
    axios.get(url).then((response) => {
      setData(response.data)
      console.log(response.data)
    }
  
  
    )
    setLocation('')
  }
}

  return (
    <>
     <div className="app">
     
      <div className="container">
      <div className="search">
        <input 
        value={location}
        onChange={event => setLocation(event.target.value)}
        onKeyPress ={searchLocation}
        placeholder='Enter Location'
        type = "text" />
      </div>
        <div className="top">

          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
          {data.main ? <h1>{data.main.temp}°F</h1> :null}

          </div>
          <div className="description">
          {data.weather ? <p>{data.weather[0].main}</p> :null}


          </div>
        </div>
        {data.main !=undefined &&
        <div className="bottom">
          <div className="feels">

         {data.main ?  <p className='bold'>{data.main.feels_like}°F</p>: null}
          <p>Feels Like</p>

          </div>
          <div className="humadity">
           

          <p>Humadity</p>
         {data.main ?  <p className='bold'>{data.main.humidity}%</p>: null}

          </div>
          <div className="wind">
          

          <p>Wind Speed</p>
         {data.wind ?  <p className='bold'>{data.wind.speed}MPH</p>: null}


          </div>

        </div>
        }
      </div>
     </div>
    </>
  )
}

export default App
