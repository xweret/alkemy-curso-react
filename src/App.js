
// libraries
import { Routes ,Route } from 'react-router-dom';
// componenets
import Login from './components/Login';
import Listado from './components/Listado';
import Detalle from './components/Detalle'
import Header from './components/Header'
import Footer from './components/Footer'
import Resultados from './components/Resultados'
// styles 
import './css/app.css'
function App() {
  const addOrRemoveFav= () => {
    console.log('ok anda');
  }
  return (
    
    <>
      <div className='container-fluid mt-3'>
        {/* probar distitnos containers, el md o el vanilla  */}
        <Header/>
        <Routes>
          {/* aca va la prop en el elemento favorito  */}
          <Route exact path='/' element={<Login/>} />
          <Route path='/listado' element={<Listado/>} />
          <Route path='/detalle' element={<Detalle/>} />
          <Route path='/resultados' element= {<Resultados/>}/>
        </Routes>
        <Footer/>
      </div>

    </>

  );
}

export default App;
