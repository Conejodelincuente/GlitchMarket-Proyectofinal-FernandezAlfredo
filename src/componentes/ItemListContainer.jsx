import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getGames, getGamesbyCategory } from '../services/productService'
import Item from './Item'
import '../css/index.css'

function ItemListContainer({titulo}){
    const [games,setGames] = useState([]);
    const [loading, setLoading] = useState(true);
    const {idCategory}= useParams();

    useEffect(() => {
    setLoading(true)

    const fetchGames = idCategory ? getGamesbyCategory(idCategory) : getGames()

    fetchGames
        .then((response) => setGames(response))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false))

    }, [idCategory])

    if (loading) return <h2 style={{color: 'white', padding: '20px'}}>Cargando juegos...</h2>

    if (games.length === 0) return <h2 style={{color: 'white', padding: '20px'}}>No hay juegos en esta categoría</h2>


    return(
        <div className="container">
            <div className='item-grid'>
                {games.map((game)=>(<Item key={game.id} item={game}/>))}
            </div>
        </div>
    )
}

export default ItemListContainer;