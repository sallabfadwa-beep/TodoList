import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Navigation from './Navigation'
import {data} from "./data"

import Home from "./Home"
import AjouterArticle from "./AjouterArticle"
import ListeArticles from "./ListeArticles"
import DetailArticle from './DetailArticle'
import "./App.css"
//import SupprimerArticle from './SupprimerArticle'
import EditArticle from './EditArticle'
// import SupprimerArticle from './SupprimerArticle'
// import RechercheArticle from './RechercheArticle'
// import ModifierArticle from './ModifierArticle'



function App() {
  
  const [articles, setArticles] = useState(data)

  function ajouterArticle(newArticle){
    setArticles([...articles, newArticle])
  }

  function supprimerArticle(id){
    let isSure = confirm("would you really want to delete this article ??")
    if(isSure){
      setArticles(articles.filter((article)=> article.id != id))
    }
  }
  function modifierArticle(updatedArticle){
    const updatedList = articles.map((article)=> 
      article.id == updatedArticle.id ?updatedArticle : article)
    setArticles(updatedList)
  }
  
  return (
    <BrowserRouter>
      
      <header>
        <h1>Logo</h1>
        <Navigation/>
      </header>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/ajouter' element={<AjouterArticle ajouterArticle={ajouterArticle}/>}/>
        <Route path='/liste' element={<ListeArticles articles={articles} supprimerArticle={supprimerArticle}/>}/>
        <Route path='/liste/detail/:id' element={<DetailArticle articles={articles} />} />
        <Route path='/liste/edit/:id' element={<EditArticle articles={articles} modifierArticle={modifierArticle}/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App