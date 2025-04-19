import {useState } from 'react'
import './App.css'
import dayjs from "dayjs"

function App() {
  const key = "bccdecaba4a34c96915170047251504"
  const [city,setCity] = useState("")
  const [data,setData] = useState(null)
  const [error, setError] = useState(null)
  function fetchWeather(){
    if (!city) {
      setError("Please enter a city name.");
      setData(null);
      return
    }
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${city}&days=3&aqi=yes&alerts=yes`)
    .then((res) => {
      return res.json()
    })
    .then(data => {
      if (data.error){
        setError(data.error.message)
        setData(null)
      }
      else{
        setData(data)
        setError(null)
        setCity("")
      }
    })
    .catch((err) => {
      setError("Network error. Please try again.")
      console.error("Error:",err)
    })
  }
  function handleKeyDown(e){
    if (e.key === "Enter") {
      fetchWeather();
      setCity("")
    }
  }
  return (
    <>
    <div className='App'>
        <div className="container">
          <h1 className="title">🌤️ Weather Forecast</h1>
          <div className="search-box">
            <input className='input' type="text" value={city} placeholder='Enter city name' onChange={(e) => setCity(e.target.value)} onKeyDown={handleKeyDown}/>
            <button className="button" onClick={fetchWeather}>Search</button>
          </div>
          {error && <p className="error">{error}</p>}
          {data && (
            <div className="card">
            <h2>{data.location.name}, {data.location.country}</h2>
            <p>🕒 Local Time: {dayjs(data.location.localtime).format("MMMM D, YYYY – h:mm A")}</p>
            <p>🌐 Time Zone: {data.location.tz_id}</p>
            <div className="temp-section">
              <img src={data.current.condition.icon} alt="weather" className="weather-icon" />
              <div className="temp-details">
                <h3>{data.current.condition.text}</h3>
                <p className="temperature">{data.current.temp_c}°C</p>
                <p className="feels-like">Feels like: {data.current.feelslike_c}°C</p>
              </div>
            </div>
            <div className="info-boxes">
              <div className="info-box">
                <h4>💧 Humidity</h4>
                <p>{data.current.humidity}%</p>
              </div>
              <div className="info-box">
                <h4>💨 Wind</h4>
                <p>{data.current.wind_kph} kph</p>
              </div>
              <div className="info-box">
                <h4>🔆 UV Index</h4>
                <p>{data.current.uv}</p>
              </div>
            </div>
            <h3>Next 3 Days</h3>
            <div className="forecast">
              {data.forecast.forecastday.map((day) => (
                <div className="forecast-card">
                  <h4>{day.date}</h4>
                  <img src={day.day.condition.icon} alt="forecast icon" />
                  <p>{day.day.condition.text}</p>
                  <p>Max: {day.day.maxtemp_c}°C</p>
                  <p>Min: {day.day.mintemp_c}°C</p>
                </div>
              ))}
            </div>
          </div>
          )}
        </div>
    </div>
    </>
  )
}
export default App