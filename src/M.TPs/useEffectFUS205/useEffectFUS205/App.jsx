import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Chrono from './Chrono'
import Home from './Home'
import Compteur from './Compteur'
import Formulaire from './Formulaire'
import ListPost from './ListPost'
import ListPost2 from './ListPost2'
import AddPost from './AddPost'
import AddPost2 from './AddPost2'
import DeletePost from './DeletePost'
import DeletePost2 from './DeletePost2'

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/chrono" element = {<Chrono/>}/>
            <Route path="/" element = {<Home/>}/>
            <Route path="/compteur" element = {<Compteur/>}/>
            <Route path="/form" element = {<Formulaire/>}/>
             <Route path="/posts" element = {<ListPost/>}/>
              <Route path="/postsaxios" element = {<ListPost2/>}/>
               <Route path="/add" element = {<AddPost/>}/>
               <Route path="/addaxios" element = {<AddPost2/>}/>
            <Route path="/deletefetch" element = {<DeletePost/>}/>
            <Route path="/deleteaxios" element = {<DeletePost2/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App