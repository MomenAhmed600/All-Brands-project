    import { createContext, useContext, useState } from "react";

    const CartContext = createContext()

    export const CartProvider = ({ children }) => {
        const [carts, setCarts] = useState({})
        

        const addCart = (product) => {
            setCarts((prevCarts) => {
                const count = product.id in prevCarts ? prevCarts[product.id].count + 1 : 1;
                return {
                    ...prevCarts,
                    [product.id]: {
                        product,
                        count,
                    }
                }
            })
        };

        const removeCart = (productId) => {
            setCarts((prevCarts) => prevCarts.filter(product => product.id !== productId))
        }


        return (
            <CartContext.Provider value={{ carts, addCart, removeCart }}>
                {children}
            </CartContext.Provider>
        )
    }

    export const useCart = () => useContext(CartContext)
