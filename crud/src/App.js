import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import './App.css';
import Menu from './components/Menu/Menu';
import Read from './components/Read/Read';
import Create from './components/Create/Create';
import Update from './components/Update/Update';
import Test from './Test';


function App() {
  const id = useParams()
  return (
    <div className='container'>
      <div className='row title'>
        <h1 className='text-center col-md-12'>Small CRUD App </h1>
      </div>
      <Menu />
        <Routes>
          <Route path='/' element={<Read />} />
          <Route path='/create' element={<Create />} />
          <Route path='/update/:id' element={<Update />} />
        </Routes>
      {/* <Test /> */}
    </div>
  );
}

export default App;
