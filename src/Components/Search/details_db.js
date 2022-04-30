import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import StarRating from "./StarRating";
import { useSelector } from "react-redux";
import "./index.css";
import { getProductsAction } from "../Actions/AddProduct";

const Details_DB = () => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});
  const { product_id } = useParams();
  const login = useSelector((state) => state.LogIn);

  const getProductsFromDB = async () => {
    const data = await getProductsAction();
    console.log("Data");
    console.log(data);
    console.log(product_id);
    let prod = data.filter((val) => val._id === product_id);
    setProduct(prod[0]);

    await setProducts(data);
    console.log("Check db1");
    console.log(prod[0]);
  };
  useEffect(() => {
    getProductsFromDB();

    // getProductsToShow();
    /* eslint-disable-next-line */
  }, []);

  return (
    <div>
      <br></br>
      <div>
        <h1>{product.name}</h1>
        <div className="row">
          <h3 className="col">Product Id : {product_id}</h3>
        </div>

        <img src={product.imageUrl} height={300} alt="All product Details" />

        <ul className="list-group mt-5">
          <li className="list-group-item">
            <div className="row">
              <div className="col-3 col-sm-2">
                <span>
                  <b>Name</b>
                </span>{" "}
                :
              </div>
              <div className="col-9 col-sm-10">
                <span>{product["name"]}</span>
              </div>
            </div>
          </li>
          <li className="list-group-item">
            <div className="row">
              <div className="col-3 col-sm-2">
                <span>
                  <b>asin</b>
                </span>{" "}
                :
              </div>
              <div className="col-9 col-sm-10">
                <span>{product["asin"]}</span>
              </div>
            </div>
          </li>
          <li className="list-group-item">
            <div className="row">
              <div className="col-3 col-sm-2">
                <span>
                  <b>imageUrl</b>
                </span>{" "}
                :
              </div>
              <div className="col-9 col-sm-10">
                <span>{product["imageUrl"]}</span>
              </div>
            </div>
          </li>
          <li className="list-group-item">
            <div className="row">
              <div className="col-3 col-sm-2">
                <span>
                  <b>currency</b>
                </span>{" "}
                :
              </div>
              <div className="col-9 col-sm-10">
                <span>{product["currency"]}</span>
              </div>
            </div>
          </li>
          <li className="list-group-item">
            <div className="row">
              <div className="col-3 col-sm-2">
                <span>
                  <b>originalPrice</b>
                </span>{" "}
                :
              </div>
              <div className="col-9 col-sm-10">
                <span>{product["originalPrice"]}</span>
              </div>
            </div>
          </li>
          <li className="list-group-item">
            <div className="row">
              <div className="col-3 col-sm-2">
                <span>
                  <b>discount</b>
                </span>{" "}
                :
              </div>
              <div className="col-9 col-sm-10">
                <span>{product["discount"]}</span>
              </div>
            </div>
          </li>
          <li className="list-group-item">
            <div className="row">
              <div className="col-3 col-sm-2">
                <span>
                  <b>discountPercentage</b>
                </span>{" "}
                :
              </div>
              <div className="col-9 col-sm-10">
                <span>{product["discountPercentage"]}</span>
              </div>
            </div>
          </li>

          <li className="list-group-item">
            <div className="row">
              <div className="col-3 col-sm-2">
                <span>
                  <b>price</b>
                </span>{" "}
                :
              </div>
              <div className="col-9 col-sm-10">
                <span>{product["price"]}</span>
              </div>
            </div>
          </li>
          {/*  {Object.keys(priceInfo).map((prod) => (*/}
          {/*      <li className="list-group-item">*/}
          {/*          <div className="row">*/}
          {/*              <div className="col-3 col-sm-2">*/}
          {/*<span>*/}
          {/*  <b>{prod}</b>*/}
          {/*</span>{" "}*/}
          {/*                  :*/}
          {/*              </div>*/}
          {/*              <div className="col-9 col-sm-10">*/}
          {/*                  <span>{priceInfo[prod]}</span>*/}
          {/*              </div>*/}
          {/*          </div>*/}
          {/*      </li>*/}
          {/*  ))}*/}
          <li className="list-group-item">
            <div className="row">
              <div className="col-3 col-sm-2">
                <span>
                  <b>Trusted User Rating</b>
                </span>{" "}
                :
              </div>
              <div className="col-9 col-sm-10">
                <span>
                  <StarRating />
                </span>
              </div>
            </div>
          </li>
          {/*{Object.keys(productAllDetails.price_information]).map(prod =>*/}
          {/*    <li className="list-group-item">*/}
          {/*        <div className="row">*/}
          {/*            <div className="col-3 col-sm-2">*/}
          {/*                <span><b>{prod}</b></span> :*/}
          {/*            </div>*/}
          {/*            <div className="col-9 col-sm-10">*/}
          {/*                /!*<span>{productAllDetails[priceInfo][prod]}</span>*!/*/}
          {/*            </div>*/}
          {/*        </div>*/}

          {/*    </li>*/}
          {/*)}*/}
        </ul>
      </div>
    </div>
  );
};

export default Details_DB;
