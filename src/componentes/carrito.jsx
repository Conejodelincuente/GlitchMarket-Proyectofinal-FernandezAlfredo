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
                            <p>Subtotal: $ {(item.price * item.quantity).toFixed(2)}</p>
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
        <div className="cart-summary">
                <p>Total de productos: <strong>{totalQuantity()}</strong></p>
                <p className="cart-total">Total: <strong>$ {totalPrice().toFixed(2)}</strong></p>
                <div className="cart-actions">
                    <button onClick={clearCart} className="btn-clear">Vaciar carrito</button>
                    <Link to="/checkout" className="btn-checkout">Finalizar compra</Link>
                </div>
            </div>
    </div>
);


};

export default Cart;