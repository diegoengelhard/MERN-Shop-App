import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import React Router DOM
import { BrowserRouter } from 'react-router-dom'

// Import Provider from Redux
import { Provider } from 'react-redux'

// Import store from Redux
import { store, persistor } from "./redux/store";

// Import PersistGate from Redux
import { PersistGate } from 'redux-persist/integration/react'

// Import toastify
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
          <ToastContainer />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
