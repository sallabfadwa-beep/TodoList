import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Compteur from './Compteur'
import Home from '/.Home'
import Chrono from '/.Chrono'
import ListPost from '/.ListPost'

export default function App() {
   return (
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Chrono' element={<Chrono />} />
            <Route path='/Compteur' element={<Compteur />} />
            <Route path='/ListPost' element={<ListPost/>} />

      </Routes>
        </BrowserRouter>

   )
 }

