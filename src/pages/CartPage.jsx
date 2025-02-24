import { Container } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { useUser } from "../context/UserContext";
import { useEffect, useState } from "react";

function CartPage() {
  const { user } = useUser();
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:8000/carts?userId=${user.id}`)
        .then((res) => res.json())
        .then((data) => setCarts(data));
    }
  }, [user]);

  const handelRemoveCart = (productId) => {
    fetch(`http://localhost:8000/carts/${productId}`, {
      method: "DELETE",
    })
      .then(() => {
        setCarts(carts.filter((car) => car.id !== productId));
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <Container>
        {carts.map((product) => (
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
              <div className="col-md-5 ">
                <h2 className="mt-1 ">{product.title}</h2>
                <p className="mt-2" id="favo-para">
                  {product.description}
                </p>

                <div className="links-favo">
                  <div>
                    <h6 className="star-logo">
                      <FaStar />
                      <span id="rate">4.9</span>
                    </h6>
                  </div>

                  <div>
                    <a
                      id="delete-logo"
                      onClick={() => handelRemoveCart(product.id)}
                    //   href="/cart"
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
        ))}
        <hr />
      </Container>
    </>
  );
}

export default CartPage;
