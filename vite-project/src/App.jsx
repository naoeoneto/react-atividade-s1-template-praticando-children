import reactLogo from './assets/react.svg'
import './App.css'
import { CenteredCard } from './components/CenteredCard'

function App() {

  return (
    <div className="App">
      {/* <h1>Alô</h1> */}
      <CenteredCard>
        <h1>Alô</h1>
      </CenteredCard>
      <CenteredCard>
        <h1>Você</h1>
      </CenteredCard>
    </div>
  )
}

export default App
