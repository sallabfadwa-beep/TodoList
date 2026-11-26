import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from     './Home'
import Blog from './Blog'
import About from './About'
import Users from './Users'
import DetailUser from './DetailUser'
import Navigation from './Navigation'


function App() {
   const users = [
                  {id:1,nom:'ali',prenom:'kamal'},
                  {id:2,nom:'alaoui',prenom:'jamal'},
                  {id:3,nom:'ourhou',prenom:'sara'}
                ]
  return (
    <BrowserRouter>
        <Navigation/>
        <Routes>
            <Route path="/" element ={<Home/>}/>
            <Route path="/blog" element ={<Blog/>}/>
            <Route path="/about" element ={<About/>}/>
            <Route path="/users" element ={<Users users  = {users}/>}/>
            <Route path="/detail-user/:id" element ={<DetailUser users = {users}/>}/>            
        </Routes>
    </BrowserRouter>
  )
}

export default App