
// libraries
import { Routes ,Route } from 'react-router-dom';
// componenets
import Login from './components/Login';
import Listado from './components/Listado';
import Header from './components/Header'
import Footer from './components/Footer'
// styles 
import './css/app.css'

function App() {
  return (
    
    
      <div className='container bg-warining'>
        <Header/>
        <Routes>
          <Route exact path='/' element={<Login/>} />
          <Route path='/listado' element={<Listado/>} />
        </Routes>
        <Footer/>
      </div>

  );
}

export default App;
