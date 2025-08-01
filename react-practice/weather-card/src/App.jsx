import Weather from "./components/weather/Weather"

function App() {
  

  return (
    <>
      <h1>Weather Forcast</h1>
      <div className="weather-grid">
        <Weather city="Miami" temperature={85} conditon="sunny"/>
        <Weather city="London" temperature={58} conditon="cloudy"/>
        <Weather city="Dever" temperature={63} conditon="rainy"/>
        <Weather city="Seatle" temperature={76} conditon="stormy"/>
      </div>
    </>
  )
}

export default App
