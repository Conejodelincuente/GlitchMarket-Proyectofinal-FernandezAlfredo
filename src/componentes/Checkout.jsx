import { useState } from "react";
import { useCart } from "../context/CartContext";
import { db } from "../services/firebaseConfig";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import "../css/checkout.css";

function Checkout() {
    const [orderId, setOrderId] = useState(null);
    const [loading, setLoading] = useState(false);
    const { cart, totalPrice, clearCart } = useCart();

    //pasarela vacia

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        emailConfirm: ""
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.email !== formData.emailConfirm) {
            alert("Los emails no coinciden");
            return;
        }

        setLoading(true);

        // Estructura de la orden para Firebase
        const order = {
            buyer: {
                name: formData.name,
                phone: formData.phone,
                email: formData.email
            },
            items: cart.map(prod => ({
                id: prod.id,
                title: prod.title,
                price: prod.price,
                quantity: prod.quantity
            })),
            total: totalPrice(),
            date: serverTimestamp()
        };

        try {
            const docRef = await addDoc(collection(db, "orders"), order);
            setOrderId(docRef.id);
            clearCart();
        } catch (error) {
            console.error("Error al crear la orden:", error);
        } finally {
            setLoading(false);
        }
    };


    //mensaje post compra

    if (orderId) {
        return (
            <div className="checkout-container success">
                <h2>¡Gracias por tu compra! 🎮</h2>
                <p>Tu número de orden es: <strong>{orderId}</strong></p>
                <p>Guárdalo para seguir tu pedido.</p>
            </div>
        );
    }

    return (
        <div className="checkout-container">
            <h2>Casi terminamos . . .</h2>
            <form onSubmit={handleSubmit} className="checkout-form">
                <input
                    type="text" name="name" placeholder="Nombre Completo"
                    onChange={handleInputChange} required/>
                <input
                    type="tel" name="phone" placeholder="Teléfono"
                    onChange={handleInputChange} required/>
                <input
                    type="email" name="email" placeholder="Email"
                    onChange={handleInputChange} required/>
                <input
                    type="email" name="emailConfirm" placeholder="Confirmar Email"
                    onChange={handleInputChange} required/>
                <button type="submit" disabled={loading} className="btn-submit">
                    {loading ? "Procesando..." : "Terminar el pedido"}
                </button>
            </form>
        </div>
    );
}

export default Checkout;