import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListCharacters from './components/ListCharacters'
import CharacterDetail from './components/CharacterDetail'
import Menu from "./components/Menu";
import './App.css'
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Menu />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<ListCharacters />}>            
            </Route>
          <Route
            path="/character/:id"
            element={<CharacterDetail />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
