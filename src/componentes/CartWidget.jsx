import{Link} from 'react-router-dom'
import '../css/Navbar.css'
import { useCart } from '../context/CartContext'

function CartWidget(){
    const {totalQuantity} = useCart();

    return (
        <>
        <Link to={'/cart'}>
        <div className="cart-icon-container">
            <img
                src={`${import.meta.env.BASE_URL}assets/carrito_32X32.png`}
                alt="Carrito"
                className="cart-icon"
            />
            {totalQuantity() > 0 && (
                <span className="cart-badge">{totalQuantity()}</span>
                )}
        </div>
        </Link>

        </>
    )
}

export default CartWidget