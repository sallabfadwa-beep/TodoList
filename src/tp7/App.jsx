import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import GestionArticles from "./GestionArticles";
import DetailArticles from "./DetailArticle";

function App() {
  return (
    <BrowserRouter>

      <nav>
        <Link to="/">Accueil</Link>
        {" | "}
        <Link to="/articles">Gestion Articles</Link>
      </nav>

      <Routes>
        <Route path="/" element={<h1>Page Accueil</h1>} />

        <Route
          path="/articles"
          element={<GestionArticles />}
        />

        <Route
          path="/articles/:id"
          element={<DetailArticles />}
        />
      </Routes>

    </BrowserRouter>
  );
}

export default App;