import { useEffect, useState } from "react";
import { BiHeart } from "react-icons/bi";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useNavigate } from "react-router-dom";

function KidsPage() {

  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/kids")
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        setList(data);
        console.log(data);
      });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const navigaterev = useNavigate();
  return (
    <>
      <div className="viedo">
        <video
          loop="loop"
          muted="muted"
          autoPlay="auto"
          src="kids video.mp4"
        ></video>
      </div>

      <div className="pe">
        <div className="text-reviews-p">
          <p className="text-reviews">Top Ten Clothes</p>
        </div>
        <Carousel responsive={responsive}>
          <div className="card-review">
            <img
              src="mo'men.jpg"
              alt="Mo'men Ahmed"
              className="product--image"
            />
            <h2>Mo'men Ahmed</h2>
            <h6>1500EGP</h6>
            <button
              onClick={() => navigaterev("/momenpage")}
              className="btn-review"
            >
              See Details
            </button>
          </div>

          <div className="card-review">
            <img
              src="mo'men.jpg"
              alt="Mo'men Ahmed"
              className="product--image"
            />
            <h2>Mo'men Ahmed</h2>
            <h6>1500EGP</h6>
            <button
              onClick={() => navigaterev("/momenpage")}
              className="btn-review"
            >
              See Details
            </button>
          </div>

          <div className="card-review">
            <img
              src="mo'men.jpg"
              alt="Mo'men Ahmed"
              className="product--image"
            />
            <h2>Mo'men Ahmed</h2>
            <h6>1500EGP</h6>
            <button
              onClick={() => navigaterev("/momenpage")}
              className="btn-review"
            >
              See Details
            </button>
          </div>

          <div className="card-review">
            <img
              src="mo'men.jpg"
              alt="Mo'men Ahmed"
              className="product--image"
            />
            <h2>Mo'men Ahmed</h2>
            <h6>1500EGP</h6>
            <button
              onClick={() => navigaterev("/momenpage")}
              className="btn-review"
            >
              See Details
            </button>
          </div>

          <div className="card-review">
            <img
              src="mo'men.jpg"
              alt="Mo'men Ahmed"
              className="product--image"
            />
            <h2>Mo'men Ahmed</h2>
            <h6>1500EGP</h6>
            <button
              onClick={() => navigaterev("/momenpage")}
              className="btn-review"
            >
              See Details
            </button>
          </div>

          <div className="card-review">
            <img
              src="mo'men.jpg"
              alt="Mo'men Ahmed"
              className="product--image"
            />
            <h2>Mo'men Ahmed</h2>
            <h6>1500EGP</h6>
            <button
              onClick={() => navigaterev("/momenpage")}
              className="btn-review"
            >
              See Details
            </button>
          </div>

          <div className="card-review">
            <img
              src="mo'men.jpg"
              alt="Mo'men Ahmed"
              className="product--image"
            />
            <h2>Mo'men Ahmed</h2>
            <h6>1500EGP</h6>
            <button
              onClick={() => navigaterev("/momenpage")}
              className="btn-review"
            >
              See Details
            </button>
          </div>

          <div className="card-review">
            <img
              src="mo'men.jpg"
              alt="Mo'men Ahmed"
              className="product--image"
            />
            <h2>Mo'men Ahmed</h2>
            <h6>1500EGP</h6>
            <button
              onClick={() => navigaterev("/momenpage")}
              className="btn-review"
            >
              See Details
            </button>
          </div>

          <div className="card-review">
            <img
              src="mo'men.jpg"
              alt="Mo'men Ahmed"
              className="product--image"
            />
            <h2>Mo'men Ahmed</h2>
            <h6>1500EGP</h6>
            <button
              onClick={() => navigaterev("/momenpage")}
              className="btn-review"
            >
              See Details
            </button>
          </div>

          <div className="card-review">
            <img
              src="mo'men.jpg"
              alt="Mo'men Ahmed"
              className="product--image"
            />
            <h2>Mo'men Ahmed</h2>
            <h6>1500EGP</h6>
            <button
              onClick={() => navigaterev("/momenpage")}
              className="btn-review"
            >
              See Details
            </button>
          </div>
        </Carousel>
      </div>

      <div className="img-cover">
        <img src="kids-page-main.jpg" alt="" />
        <div className="content">
          <h1>Sale 30% For Collection</h1>
        </div>
      </div>

      <div className="text-reviews-p">
        <p className="text-reviews">New Collection</p>
      </div>

      <div className="container py-5">
        <div className="row row-cols-1 row-cols-md-3 g-4 py-2">
          {list.map((product) => (
            <div className="col" key={product.id}>
              <div className="card pdcard">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt="pic for the recipe"
                />
                <div className="card-body pdcardbody">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.description}</p>
                  <h5 className="card-title">
                    {product.price} <span>EGP</span>
                  </h5>
                </div>
                <div className="mb-4 d-flex justify-content-around wsbtn">
                  <button className="btn btn-dark">View Details</button>

                  <button>
                    
                      {/* <BiHeart color="red" />
                   
                      <BiHeartd /> */}
                   
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default KidsPage;
