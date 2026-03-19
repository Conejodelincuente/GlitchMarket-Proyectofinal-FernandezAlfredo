import { useState } from "react";
import '../css/itemCount.css'

function ItemCount({ stock, initial, onAdd }) {

    const [count, setCount] = useState(initial);

    const increment = () => {
        if (count < stock) setCount(count + 1);
    };

    const decrement = () => {
        if (count > 1) setCount(count - 1);
    };

    return (
        <div className="item-count">
            <div className="controls">
                <button  onClick={decrement} className="btn-control">-</button>
                <span className="count-number">{count}</span>
                <button onClick={increment}className="btn-control">+</button>
            </div>
            <button
                className="btn-add"
                onClick={() => onAdd(count)}
                disabled={stock === 0}>
                {stock === 0 ? disabled = `No hay stock` : `Agregar al carrito`}
            </button>
        </div>
    );
}

export default ItemCount;