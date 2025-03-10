import { Container } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { useUser } from "../context/UserContext";
import { createContext, useEffect, useState } from "react";
import { useCart } from "../context/CartContext";

function CartPage() {
  const { user } = useUser();
  const { carts, removeCart } = useCart();
  const [cartsList, setCartsList] = useState([]);
  const [count, setCount] = useState({});
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const c = Object.keys(carts).map(id => carts[id].count).reduce((acc, curr) => acc + curr, 0);
    setCartCount(c)
  }, [carts])


   const increaseCount = (productId) => {
    setCount((prevCount) => ({
      ...prevCount,

      [productId]: (prevCount[productId] || 1) + 1,
    }));
  };

  const decreaseCount = (productId) => {
    setCount((prevCount) => ({
      ...prevCount,
      [productId]: prevCount[productId] > 1 ? prevCount[productId] - 1 : 1,
    }));
  };

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:8000/carts?userId=${user.id}`)
        .then((res) => res.json())
        .then((data) => setCartsList(data));
    }
  }, [user]);

  const handelRemoveCart = (productId) => {
    fetch(`http://localhost:8000/carts/${productId}`, {
      method: "DELETE",
    })
      .then(() => {
        console.log("Product deleted from server:", productId);
        setCartsList(cartsList.filter((car) => car.id !== productId));
        removeCart(productId);
      })
      .catch((err) => console.log(err));
  };
  console.log('carts', carts);
  return (
    <>
      <Container>
        {Object.keys(carts).map(id => carts[id]).map(({ product, count }) => (
          <>
            <div className="review-p-fevo" key={product.id}>
              <div className="row" id="bg-prof-img">
                <div className="col-md-2">
                  <img
                    src={product.image}
                    alt=""
                    className="img-fluid mt-1"
                    id="img-favo"
                  />
                </div>
                <div className="col-md-5 favo-content">
                  <h2 className="mt-1 ">{product.title}</h2>
                  <p className="mt-2" id="favo-para">
                    {product.description}
                  </p>

                  <div className="links-favo">
                    <div>
                      <h6 className="star-logo">
                        <span id="rate">
                          {product.price} <span>EGP</span>
                        </span>
                      </h6>
                    </div>

                    <div className="quantity">
                      <button
                        className="plus"
                        onClick={() => increaseCount(product.id)}
                      >
                        +
                      </button>

                      <span>{count}</span>

                      <button
                        className="minus"
                        onClick={() => decreaseCount(product.id)}
                      >
                        -
                      </button>
                    </div>

                    <div>
                      <a
                        id="delete-logo"
                        onClick={() => handelRemoveCart(product.id)}
                        href="#as"
                      >
                        <i>
                          <MdDeleteForever />
                        </i>{" "}
                      </a>
                    </div>
                  </div>
                  <button type="button" id="btn-fevo">
                    See Details
                  </button>
                </div>
              </div>
            </div>
          </>
        ))}

        <hr />
        <div className="checkout">
          <h1>CheckOut</h1>
          <div className="content-check">
            <div className="content-1">
              <div>
                <h3>Total Quantity:</h3>
              </div>
              <div className="con-11">
                <h5>
                {cartCount}
                </h5>
              </div>
            </div>

            <div className="content-2">
              <div>
                <h3>Total Price:</h3>
              </div>
              <div className="con-22">
                <h5>
                  {cartsList.reduce((acc, product) =>
                      acc + (cartCount[product.id] || 1) * product.price,
                    0
                  )}{" "}
                  <span>EGP</span>
                </h5>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </Container>
    </>
  );
}


export default CartPage;
