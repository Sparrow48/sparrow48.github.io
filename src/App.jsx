import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './router/Navigation';


function App() {

  return (
    <Router>
      <div className=' font-robotoSerif min-h-screen dark:bg-black dark:text-white'>
        <div className='max-w-4xl mx-auto'>
          <Header />
          <Routes>
            <Route path={'/*'} element={<Navigation />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  )
}

export default App
