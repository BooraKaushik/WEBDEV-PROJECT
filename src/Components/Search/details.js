import React, { useState, useEffect } from "react";

import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import StarRating from "./StarRating";
import { useSelector } from "react-redux";
import { isDealerService } from "../../Services/LoginService";
import { AddProductAction } from "../Actions/AddProduct";
import "./index.css";

const Details = () => {
  const [start, setStart] = useState(true);
  const [productTitle, setproductTitle] = useState([]);
  const [product, setProduct] = useState([]);
  const [priceInfo, setPriceInfo] = useState([]);
  const [productAllDetails, setProductAllDetails] = useState([]);
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    imageUrl: "",
    price: 0,
    manufacturer: "",
    asin: "",
    country: "",
    originalPrice: 0,
    discount: 0,
    discountPercentage: 0,
    currency: "",
    vid: "",
  });
  const { product_id } = useParams();
  const login = useSelector((state) => state.LogIn);

  const addToCart = async () => {
    await setData({
      ...data,
      name: productTitle,
      asin: product_id,
      imageUrl: productAllDetails.product_main_image_url,
      manufacturer: productAllDetails.product_details["_Manufacturer_"],
      originalPrice: Number(
        productAllDetails.price_information["original_price"]
      ),
      price: Number(productAllDetails.price_information["app_sale_price"]),
      currency: productAllDetails.price_information["currency"],
      discount: Number(productAllDetails.price_information["discount"]),
      discountPercentage: Number(
        productAllDetails.price_information["discount_percentage"]
      ),
    });
  };
  const productDetails = () => {
    const options = {
      method: "GET",
      url: `https://amazon24.p.rapidapi.com/api/product/${product_id}`,
      params: { country: "US" },
      headers: {
        "X-RapidAPI-Host": "amazon24.p.rapidapi.com",
        "X-RapidAPI-Key": "b3efac4ebcmsh09dea2bbba700d6p1b5d89jsnbf7267d877bc",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setproductTitle(response.data.product_title);
        setProduct(response.data.product_details);
        setPriceInfo(response.data.price_information);
        setProductAllDetails(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  useEffect(() => {
    if (start) {
      productDetails();
      setStart(false);
    } else {
      console.log(data);
      AddProductAction(data).then((data) => {
        if (data.success) {
          navigate(`/details_db/${data.products._id}`);
        }
      });
    }

    /* eslint-disable-next-line */
  }, [data]);

  return (
    <div>
      <br></br>
      <div>
        <h1>{productTitle}</h1>

        <div className="row">
          <h3 className="col">Product Id : {product_id}</h3>
          {login.logedIn && isDealerService() && (
            <button
              className="col-2 btn-primary float-end rounded"
              onClick={() => {
                addToCart();
              }}
            >
              Add Product
            </button>
          )}
        </div>

        <img
          src={productAllDetails.product_main_image_url}
          height={300}
          alt="All product Details"
        />

        <ul className="list-group mt-5">
          {Object.keys(product).map((prod) => (
            <li className="list-group-item">
              <div className="row">
                <div className="col-md-4 ">
                  <span>
                    <b>{prod.replaceAll("_", " ").trim()}</b>
                  </span>{" "}
                  :
                </div>
                <div className="col-md-8 ">
                  <span>{product[prod]}</span>
                </div>
              </div>
            </li>
          ))}
          {Object.keys(priceInfo).map((prod) => (
            <li className="list-group-item">
              <div className="row">
                <div className="col-md-4">
                  <span>
                    <b>{prod.replaceAll("_", " ").trim()}</b>
                  </span>{" "}
                  :
                </div>
                <div className="col-md-8">
                  <span>{priceInfo[prod]}</span>
                </div>
              </div>
            </li>
          ))}
          <li className="list-group-item">
            <div className="row">
              <div className="col-md-4">
                <span>
                  <b>Trusted User Rating</b>
                </span>{" "}
                :
              </div>
              <div className="col-md-8">
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

export default Details;
