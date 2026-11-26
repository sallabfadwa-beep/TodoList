import { useState } from "react";
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Navigation from "./Navigation";
import Home from "./Home";
import AjouterArticle from "./AjouterArticle";
import ListeArticles from "./ListeArticles";
import DetailArticle from "./DetailArticle";
import ModifierArticle from "./ModifierArticle";
import SupprimerArticle from "./SupprimerArticle";
import RechercherArticle from "./RechercherArticle";

function App() {
  const [articles, setArticles] = useState([
    {
      id: 1,
      titre: "Ordinateur portable",
      prix: 7500,
      categorie: "Informatique",
      description: "Ordinateur portable performant"
    },
    {
      id: 2,
      titre: "Téléphone",
      prix: 3000,
      categorie: "Téléphonie",
      description: "Smartphone Android"
    },
    {
      id: 3,
      titre: "Clavier",
      prix: 250,
      categorie: "Accessoires",
      description: "Clavier sans fil"
    }
  ]);

  return (
    <BrowserRouter>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/ajouter"
          element={
            <AjouterArticle
              articles={articles}
              setArticles={setArticles}
            />
          }
        />

        <Route
          path="/liste"
          element={<ListeArticles articles={articles} />}
        />

        <Route
          path="/detail/:id"
          element={<DetailArticle articles={articles} />}
        />

        <Route
          path="/modifier/:id"
          element={
            <ModifierArticle
              articles={articles}
              setArticles={setArticles}
            />
          }
        />

        <Route
          path="/supprimer/:id"
          element={
            <SupprimerArticle
              articles={articles}
              setArticles={setArticles}
            />
          }
        />

        <Route
          path="/rechercher"
          element={<RechercherArticle articles={articles} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;