import './style.css'

import { GlobalProvider } from '../global-context'
import { NextIntlProvider } from 'next-intl'
import Home from '.'
export default function MyApp() {
  return (
    
    <NextIntlProvider>
      <GlobalProvider>
        <Home/>
      </GlobalProvider>
    </NextIntlProvider>
  )
}
