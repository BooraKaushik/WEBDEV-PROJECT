import React, { useState, useEffect } from "react";

import { Link, useParams } from "react-router-dom";
import StarRating from "./StarRating";
import "./index.css";
import { getProductAction } from "../Actions/AddProduct";
import { isloggedinService } from "../../Services/LoginService";
import Likes from "../Likes";
import { Rating } from "@mui/material";

const Details_DB = () => {
  const [product, setProduct] = useState({});
  const { product_id } = useParams();

  const getProductsFromDB = async () => {
    const data = await getProductAction(product_id);
    setProduct(data);
  };
  useEffect(() => {
    getProductsFromDB();
    /* eslint-disable-next-line */
  }, []);

  return (
    <div>
      <br></br>
      <div>
        <h1>{product.name}</h1>
        <div className="row"></div>
        <div className="my-3 mx-auto" style={{ textAlign: "center" }}>
          <img src={product.imageUrl} height={300} alt="All product Details" />
        </div>
        {isloggedinService() && (
          <>
            <br />
            <div className="mt-4 mx-4" style={{ fontSize: "30px" }}>
              <div className="mx-auto">
                <Likes pid={product_id} />
              </div>
              <p style={{ fontSize: "14px" }}>Like</p>
            </div>
          </>
        )}

        <ul className="list-group mt-3">
          <li className="list-group-item">
            <div className="row">
              <div className="col col-md-4">
                <span>
                  <b>Name</b>
                </span>{" "}
                :
              </div>
              <div className="col col-md-8">
                <span>{product["name"]}</span>
              </div>
            </div>
          </li>
          <li className="list-group-item">
            <div className="row">
              <div className="col col-md-4">
                <span>
                  <b>asin</b>
                </span>{" "}
                :
              </div>
              <div className="col col-md-8">
                <span>{product["asin"]}</span>
              </div>
            </div>
          </li>
          <li className="list-group-item">
            <div className="row">
              <div className="col col-md-4">
                <span>
                  <b>imageUrl</b>
                </span>{" "}
                :
              </div>
              <div className="col col-md-8">
                <span>{product["imageUrl"]}</span>
              </div>
            </div>
          </li>
          <li className="list-group-item">
            <div className="row">
              <div className="col col-md-4">
                <span>
                  <b>currency</b>
                </span>{" "}
                :
              </div>
              <div className="col col-md-8">
                <span>{product["currency"]}</span>
              </div>
            </div>
          </li>
          <li className="list-group-item">
            <div className="row">
              <div className="col col-md-4">
                <span>
                  <b>originalPrice</b>
                </span>{" "}
                :
              </div>
              <div className="col col-md-8">
                <span>{product["originalPrice"]}</span>
              </div>
            </div>
          </li>
          <li className="list-group-item">
            <div className="row">
              <div className="col col-md-4">
                <span>
                  <b>discount</b>
                </span>{" "}
                :
              </div>
              <div className="col col-md-8">
                <span>{product["discount"]}</span>
              </div>
            </div>
          </li>
          <li className="list-group-item">
            <div className="row">
              <div className="col col-md-4">
                <span>
                  <b>discountPercentage</b>
                </span>{" "}
                :
              </div>
              <div className="col col-md-8">
                <span>{product["discountPercentage"]}</span>
              </div>
            </div>
          </li>

          <li className="list-group-item">
            <div className="row">
              <div className="col col-md-4">
                <span>
                  <b>price</b>
                </span>{" "}
                :
              </div>
              <div className="col col-md-8">
                <span>{product["price"]}</span>
              </div>
            </div>
          </li>
          <li className="list-group-item">
            <div className="row">
              <div className="col col-md-4">
                <span>
                  <b>Trusted User Rating</b>
                </span>{" "}
                :
              </div>
              <div className="col col-md-8">
                <span>
                  <StarRating />
                </span>
              </div>
            </div>
          </li>
        </ul>
        {product.reviews && (
          <div className="list-group my-3">
            {product.reviews.map((element) => {
              return (
                <div className="list-group-item">
                  <div className="row" style={{ alignItems: "center" }}>
                    <div className="col col-md-2">
                      <div className="d-none d-md-block">
                        <Link
                          to={`/profile/${element.user._id}`}
                          style={{ textDecoration: "none" }}
                        >
                          <div
                            className="p-2 m-auto"
                            style={{
                              borderRadius: "50px",
                              backgroundColor: "gray",
                              width: "50px",
                              height: "50px",
                              textAlign: "center",
                            }}
                          >
                            <h4 style={{ color: "white" }}>
                              {element.user.firstName.charAt(0) +
                                element.user.lastName.charAt(0)}
                            </h4>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="col col-md-10">
                      <div className="p-3">
                        <Link
                          to={`/profile/${element.user._id}`}
                          style={{ textDecoration: "none" }}
                        >
                          <h4>
                            {element.user.firstName +
                              " " +
                              element.user.lastName}
                          </h4>
                        </Link>
                        <p>{element.review}</p>
                        <Rating
                          name="read-only"
                          value={element.rating}
                          readOnly
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
        {isloggedinService && <div>hello</div>}
      </div>
    </div>
  );
};

export default Details_DB;
