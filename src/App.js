import React from 'react';
import Logo from './img/zoo-logo.png';
import LogoLetras from './img/logo-letras.png';
import { Navbar, ToastContainer } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Tickets from './components/Tickets';
import Resume from './components/Resume';
import SelectTickets from './components/clientpage/SelectTickets';
import ClientInterface from './components/clientpage/ClientInterface';
import Sales from './components/Sales/Sales';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar className="nav-body p-0">
        <div className='ps-3 py-2 pe-5'>
          <Navbar.Brand style={{ width: '30%' }}>
            <img src={Logo} className='me-2' width={60} alt='Zoo-Logo' />
            <img src={LogoLetras} width={100} alt='Zoo-Logo-Letras' />
          </Navbar.Brand>
        </div>
      </Navbar>
      <Routes>
        <Route path="/comprar-tickets" element={<ClientInterface />} />
        <Route path="/taquilla" element={<Tickets />} />
        <Route path="/ventas" element={<Sales />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
