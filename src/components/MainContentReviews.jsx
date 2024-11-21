import { Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useNavigate } from "react-router-dom";

function MainContentReviews() {
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
  
      <div className="pe">
        <div className="text-reviews-p">
          <p className="text-reviews">Top Ten Reviewers</p>
        </div>
        <Carousel responsive={responsive}>

          <div className="card-review">
            <img src="mo'men.jpg" alt="Mo'men Ahmed" className="product--image" />
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
            <img src="mo'men.jpg" alt="Mo'men Ahmed" className="product--image" />
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
            <img src="mo'men.jpg" alt="Mo'men Ahmed" className="product--image" />
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
            <img src="mo'men.jpg" alt="Mo'men Ahmed" className="product--image" />
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
            <img src="mo'men.jpg" alt="Mo'men Ahmed" className="product--image" />
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
            <img src="mo'men.jpg" alt="Mo'men Ahmed" className="product--image" />
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
            <img src="mo'men.jpg" alt="Mo'men Ahmed" className="product--image" />
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
            <img src="mo'men.jpg" alt="Mo'men Ahmed" className="product--image" />
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
            <img src="mo'men.jpg" alt="Mo'men Ahmed" className="product--image" />
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
            <img src="mo'men.jpg" alt="Mo'men Ahmed" className="product--image" />
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
  );
}

export default MainContentReviews;
