    import { createContext, useContext, useState } from "react";

    const CartContext = createContext()

    export const CartProvider = ({ children }) => {
        const [carts, setCarts] = useState([])

        const addCart = (product) => {
            setCarts((prevCarts) => [...prevCarts, product])
        };

        const removeCart = (productId) => {
            setCarts((prevCarts) => prevCarts.filter(product => product.id !== productId))
        }

        // const removeCart = (productId) => {
        //     setCarts((prevCarts) => {
        //       const updated = prevCarts.filter(product => Number(product.id) !== Number(productId));
        //       console.log("Updated carts after removal:", updated);
        //       return [...updated];
        //     });
        // }

        return (
            <CartContext.Provider value={{ carts, addCart, removeCart }}>
                {children}
            </CartContext.Provider>
        )
    }

    export const useCart = () => useContext(CartContext)
