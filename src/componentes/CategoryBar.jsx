import { NavLink } from 'react-router-dom'
import '../css/Navbar.css'

function CategoryBar (){
    return(
        <div className='category-bar'>
            <NavLink to={'/'}>Todos</NavLink>
            <NavLink to={'/category/playstation'}>PlayStation</NavLink>
            <NavLink to={'/category/xbox'}>Xbox</NavLink>
            <NavLink to={'/category/steam'}>Steam</NavLink>
        </div>
    )
}

export default CategoryBar;