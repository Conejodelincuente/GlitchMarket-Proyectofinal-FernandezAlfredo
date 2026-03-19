import { Link } from 'react-router-dom'
import '../css/card.css'

function Item ({item}){
    return(
        <div className='card'>
            <img className='card-img' src={`${import.meta.env.BASE_URL}${item.image}`} alt={item.title}/>
            <div className="card-body">
                <h3 className="card-title">{item.title}</h3>
                <p className="card-platform">{item.platform}</p>
                <p className="card-price">${item.price}</p>
                <Link to={`/item/${item.id}`} className='btn-detail'>Detalles</Link>
            </div>
        </div>
    )
}
export default Item