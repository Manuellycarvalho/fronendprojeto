import React from 'react';
import {Routes, Route} from 'react-router-dom'
import { Login } from '../Paginas/Login';
import { Sensor } from '../Paginas/Sensor';
import { Inicial } from '../Paginas/Inicial';
import { CadastrarSensor } from '../Paginas/CadastrarSensor';
import { Localizacao } from '../Paginas/Localizacao';
import { Filtro } from '../Paginas/Filtro'; 
import { Projeto } from '../Paginas/projeto';
import { Home } from '../Paginas/Home'
import { Sobre } from '../Paginas/sobre';

 export function Rotas() {
    return (
        <Routes>

        <Route path='/' element={ <Login /> } />

        <Route path='inicial' element={ <Inicial /> } >
            <Route index element={ <Home /> } />
            <Route path='sensor' element={<Sensor/>}></Route>
            <Route path='cadsensor' element={ <CadastrarSensor /> } />
            <Route path='localizacao' element={ <Localizacao /> } />
            <Route path='filtro' element={<Filtro />} /> 
            <Route path='projeto' element={<Projeto/>}/>
            <Route path='home' element={<Home/>}/>
            <Route path='sobre' element={<Sobre/>}/>
            
        </Route>

    </Routes>
)
}


