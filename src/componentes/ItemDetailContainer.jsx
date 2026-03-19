import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getGamesbyId } from "../services/productService";
import ItemDetail from './ItemDetail'

function ItemDetailContainer() {
    const [game, setGame] = useState(null);
    const [loading, setLoading] = useState(true);
    const {idItem} = useParams();

    useEffect(()=>{
        setLoading(true);
        getGamesbyId(idGame)
            .then ((respose)=>setGame(respose))
            .catch((error)=>{console.error('Error: ', error)})
            .finally(()=>{setLoading(false)})
        }
    ,[idItem]);

    if (loading) return <h2 style={{color: 'white', padding: '20px'}}>Cargando juego...</h2>

    return (
    <main className="container">
        <ItemDetail item={game}/>
    </main>
    )
}

export default ItemDetailContainer;