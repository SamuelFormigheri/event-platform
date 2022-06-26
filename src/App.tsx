import { AppContexts } from "./contexts"
import { AppRoutes } from "./routes"
import './styles/global.css'

function App() {
  return (
  <AppContexts>
      <AppRoutes />
  </AppContexts>
  )
}

export default App
