import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './router/Navigation';


function App() {

  return (
    <Router>
      <div className='font-jetbrains dark:bg-black'>
        <div className='flex flex-col  h-screen max-w-4xl mx-auto'>
          <div className='sticky top-0'>
            <Header />
          </div>
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
