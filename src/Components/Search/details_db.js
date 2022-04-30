import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import StarRating from "./StarRating";
import "./index.css";
import { getProductAction } from "../Actions/AddProduct";
import Likes from "../Likes";
import { isloggedinService } from "../../Services/LoginService";

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
      </div>
    </div>
  );
};

export default Details_DB;
