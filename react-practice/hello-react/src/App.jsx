import doggo from './assets/8665610_plane_departure_icon.svg'

function App() {

  const todayDate = new Date().toLocaleDateString();
  return (
    // jsx code
    <>
      <h1>Hello World</h1>
      <p>Today's date is {todayDate}</p>
      <img src={doggo} alt='plane' />  
    </>
  )
}

export default App
