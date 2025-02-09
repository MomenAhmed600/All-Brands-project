import { useEffect, useState } from "react";
import { BiHeart } from "react-icons/bi";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";

function ProductsPage() {
  const [list, setList] = useState([]);
  const [listtop10, setListtop10] = useState([]);
  const [listfrontphoto, setListfrontphoto] = useState([]);
  const [listvideo, setListvideo] = useState([]);
  const { gender } = useParams();
  const location = useLocation();
  console.log(gender);

  useEffect(() => {
    if (location.pathname === "/products") {
      // <------------product-video-------------------->
      fetch("http://localhost:8000/allproduct-video")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setListvideo(data);
        });
      // <------------cards-video-------------------->
      fetch("http://localhost:8000/all-products-cards")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setList(data);
        });

      // <------------top-10-------------------->
      fetch("http://localhost:8000/top10-all-products")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setListtop10(data);
        });

      // <------------front-photo-------------------->
      fetch("http://localhost:8000/allproduct-front-photo")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setListfrontphoto(data);
        });
    } else if (gender.length > 0 && ["woman", "man", "kids"].includes(gender)) {
      // <-------------video-------------------->
      fetch(`http://localhost:8000/${gender}-video`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setListvideo(data);
        });
      // <------------cards-video-------------------->
      fetch(`http://localhost:8000/${gender}`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setList(data);
        });

      // <------------top-10-------------------->
      fetch(`http://localhost:8000/top10-${gender}`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setListtop10(data);
        });

      // <------------front-photo-------------------->
      fetch(`http://localhost:8000/${gender}-front-photo`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setListfrontphoto(data);
        });
    }
  }, [gender]);

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
      {listvideo.map((product) => (
        <div className="viedo" key={product.id}>
          <video
            loop="loop"
            muted="muted"
            autoPlay="auto"
            src={product.video}
          ></video>
        </div>
      ))}
      <div className="pearnt-product">
        <button className="link">
          <Link className="chi" to="/products">
            All Products
          </Link>
        </button>
        <button className="link">
          <Link className="chi" to="/products/woman">
            Women
          </Link>
        </button>
        <button className="link">
          <Link className="chi" to="/products/man">
            Men
          </Link>
        </button>
        <button className="link">
          <Link className="chi" to="/products/kids">
            kids
          </Link>
        </button>
      </div>

      <div className="pe">
        <div className="text-reviews-p">
          <p className="text-reviews">Top Ten Clothes</p>
        </div>
        <Carousel responsive={responsive}>
          {listtop10.map((product) => (
            <div className="card-review" key={product.id}>
              <img
                src={product.image}
                alt={product.title}
                className="product--image"
              />
              <h4>{product.title}</h4>
              <p className="card-text">{product.description}</p>
              <h6>
                {product.price} <span>EGP</span>
              </h6>
              <button
                onClick={() => navigaterev("/momenpage")}
                className="btn-review"
              >
                See Details
              </button>
            </div>
          ))}
        </Carousel>
      </div>

      {listfrontphoto.map((product) => (
        <div className="img-cover" key={product.id}>
          <img src={product.image} alt="" />
          <div className="content">
            <h1>
              Sale<span>30%</span>For Collection
            </h1>
          </div>
        </div>
      ))}

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
                    <BiHeart color="red" />

                    <BiHeart />
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

export default ProductsPage;
