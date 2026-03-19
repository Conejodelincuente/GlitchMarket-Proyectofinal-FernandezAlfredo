import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';
import '../css/cardDetail.css'

function ItemDetail({item}){
    const [quantityAdded, setQuantityAdded] = useState(0);
    const { addItem } = useCart();

    const handleOnAdd = (quantity) => {
            setQuantityAdded(quantity);
            addItem(item, quantity);
        };

    return(
        <div className="detail-layout">
        <div className="detail-img-container">
            <img src={`${import.meta.env.BASE_URL}${item.image}`} alt={item.title} className="detail-img" />
        </div>
        <div className="detail-info">
            <p className="detail-platform">{item.platform}</p>
            <h1 className="detail-title">{item.title}</h1>
            <p className="detail-description">{item.description}</p>
            <p className="detail-price">$ {item.price}</p>
            <div className="detail-footer">{
                quantityAdded > 0 ? (
                <Link to="/cart" className="btn-buy" style={{textAlign: 'center', textDecoration: 'none', display: 'block'}}>Terminar mi compra</Link>)
                : (<ItemCount
                    stock={item.stock}
                    initial={1}
                    onAdd={handleOnAdd}
                    />
                )}
            </div>
        </div>

    </div>
    );
}

export default ItemDetail;