import { createContext, useState, useContext } from "react";

export const CartContext = createContext();
export const usecart = useContext(CartContext);

//provider del carrito
export const CartProvider = ({children})=>{
    const [cart, setCart]= useState([]);

// funcin para agregar al carrito

    const addCart = (item, quantity)=>{
        if (isInCart(item.id)){
            setCart(cart.map(prod =>
                prod.id === item.id
                ? { ...prod, quantity: prod.quantity + quantity }
                : prod
            ));
        } else {
            setCart([...cart, { ...item, quantity }]);
        }
    };

    // Función para saber si un producto ya está en el carrito
    const isInCart = (id) => cart.some(prod => prod.id === id);

    // Función para borrar un producto
    const removeItem = (id) => setCart(cart.filter(prod => prod.id !== id));

    // Función para vaciar el carrito
    const clearCart = () => setCart([]);

    // Función para calcular el total de unidades (para el CartWidget)
    const totalQuantity = () => cart.reduce((acc, prod) => acc + prod.quantity, 0);

    // Función para calcular el precio total
    const totalPrice = () => cart.reduce((acc, prod) => acc + (prod.quantity * prod.price), 0);

    return (
        <CartContext.Provider value={{
            cart,
            addItem,
            removeItem,
            clearCart,
            totalQuantity,
            totalPrice
        }}>
            {children}
        </CartContext.Provider>
    );
}