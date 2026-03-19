import{Link} from 'react-router-dom'
import '../css/Navbar.css'

function CartWidget(){
    return (
        <>
        <Link to={'/'} className='carrito'>🛒</Link>
        </>
    )
}

export default CartWidget