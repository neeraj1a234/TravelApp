import { useState } from 'react';
import './App.css';
import Login from './Authentication/Login';
import Signup from './Authentication/Signup';
import AddDestinations from './Components/AddDestinations';
import NavBar from './Components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './Pages/MainPage';
import MainComponent from './Components/MainComponent';
import AdminProvider from './Context/AdminProvider';
import AuthUserProvider from './Context/AuthUserProvider';
import Destinations from './Pages/Destinations';

function App() {
  return (
    <AuthUserProvider>
    <AdminProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainComponent/>}>
            <Route index element={<MainPage/>}/>
            <Route path="/home/login" element={<Login />} />
            <Route path="/home/signup" element={<Signup />} />
            <Route path="/home/admin/add" element={<AddDestinations />} />
            <Route path="/home/destinations" element={<Destinations/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </AdminProvider>
    </AuthUserProvider>
  );
}

export default App;
