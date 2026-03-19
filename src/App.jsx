import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './componentes/ItemListContainer'
import ItemDetailContainer from './componentes/ItemDetailContainer';
import NavBar from "./componentes/NavBar"
import CategoryBar from "./componentes/CategoryBar"
import './css/index.css'

function App() {

return (
    <>
    <CartProvider>
      <BrowserRouter>
        <NavBar/>
        <CategoryBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer titulo="Todos los Juegos" />} />
          <Route path="/category/:idCategory" element={<ItemListContainer titulo="Filtro por categoría" />} />
          <Route path="/item/:idItem" element={<ItemDetailContainer/>} />
          <Route path="*" element={<h2>404 - ¡Página no encontrada, vuelve al lobby!</h2>} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
    </>
  )
}

export default App
