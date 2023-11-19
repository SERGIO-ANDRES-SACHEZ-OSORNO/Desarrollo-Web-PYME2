
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import Store from './pages/store';
import Form from './pages/form';
import Header from './components/header'
import Productos from './components/productos/index'

function App() {
  return (
    <Router>
      <Header/>
      
      <Routes>
        <Route path='/' element={<Home/>}>Inicio</Route>
        <Route path='/store' element={<Store/>}>Tienda</Route>
        <Route path='/form' element={<Form/>}>Formilario</Route>
        <Route path='/index' element={<Productos/>}>Productos</Route>
      </Routes>
    </Router>
  );
}


export default App;
