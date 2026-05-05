import { Provider } from 'react-redux'
import { store } from '@app/store/store'
import { BrowserRouter } from 'react-router-dom'

interface AppProviderProps {
  children: React.ReactNode
}

export function AppProvider({ children }: AppProviderProps) {
  return (
    <Provider store={store}>
      <BrowserRouter>{children}</BrowserRouter>
    </Provider>
  )
}
