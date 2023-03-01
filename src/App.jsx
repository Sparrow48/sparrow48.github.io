import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './router/Navigation';


function App() {

  return (
    <Router>
      <div className='flex flex-col space-y-16'>
        <div className='sticky top-0'>
          <Header />
        </div>
        <Routes>
          <Route path={'/*'} element={<Navigation />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
