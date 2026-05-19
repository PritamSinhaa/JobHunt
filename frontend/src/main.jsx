import './index.css'
import App from './App.jsx'
import ReactDOM from 'react-dom/client' 
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from './components/ui/sonner'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
    <Toaster/>
  </BrowserRouter>,
)
