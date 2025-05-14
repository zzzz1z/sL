import './style.css'

import { GlobalProvider } from '../global-context'
import Home from '.'
export default function MyApp() {
  return (
    
    
      <GlobalProvider>
        <Home/>
      </GlobalProvider>
  )
}
