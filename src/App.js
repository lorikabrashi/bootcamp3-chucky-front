import { PersistGate } from 'redux-persist/integration/react'
import AppRoutes from './routes/routes'
import { store } from './store/store'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'


function App() {
  const persistor = persistStore(store)
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppRoutes />
      </PersistGate>
    </Provider>
  )
}

export default App
