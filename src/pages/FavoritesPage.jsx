import { Container } from "react-bootstrap";
import { MdFavorite } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";


function FavoritesPage() {
    return (
        <>


            <Container >
                <div className="review-p-fevo">
                    <div className="row" id="bg-prof-img">
                        <div className="col-md-2" >
                            <img
                                src="metballs.jpg"
                                alt=""
                                className="img-fluid mt-1"
                                id="img-favo"
                            />
                        </div>
                        <div className="col-md-5 ">
                            <h2 className="mt-1 ">
                                Spaghetti And Meatballs
                            </h2>
                            <p className="mt-2" id="favo-para">
                                Spaghetti And Meatballs And Tomato Sauce
                            </p>

                            <div className="links-favo">
                                <div>
                                    <h6 className="star-logo"><FaStar /><span id="rate">4.9</span></h6>
                                </div>

                                <div>
                                    <a id="delete-logo"><i><MdDeleteForever /></i> </a>
                                </div>

                            </div>
                            <button type="button" id="btn-fevo">
                                See Recipe
                            </button>

                        </div>

                    </div>
                </div>
                <hr />
            </Container>
        </>
    )
}

export default FavoritesPage;