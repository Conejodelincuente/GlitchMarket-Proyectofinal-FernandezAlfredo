import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import '../css/cart.css';

function Cart(){
const { cart, removeItem, clearCart, totalPrice, totalQuantity } = useCart();

if (cart.length === 0) {
        return (
            <div className="cart-empty">
                <h2>Tu carrito está vacío 😢</h2>
                <Link to="/" className="btn-back">Volver a la tienda</Link>
            </div>
        );
    }

return (
    <div className="cart-container">
        <h2 className="cart-title">Tu Carrito</h2>
        <div className="cart-list">
                {cart.map(item => (
                    <div key={item.id} className="cart-item">
                        <img src={`${import.meta.env.BASE_URL}${item.image}`} alt={item.title} className="cart-item-img" />
                        <div className="cart-item-info">
                            <h3>{item.title}</h3>
                            <p>{item.platform}</p>
                            <p>Cantidad: {item.quantity}</p>
                            <p>Subtotal: $ {item.price * item.quantity}</p>
                        </div>
                        <button
                            className="btn-remove"
                            onClick={() => removeItem(item.id)}
                        >
                            ✕
                        </button>
                    </div>
                ))}
        </div>
    </div>
);


};

export default Cart;