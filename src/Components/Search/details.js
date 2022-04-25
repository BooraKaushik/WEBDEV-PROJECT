import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Details = () => {
  const [productTitle, setproductTitle] = useState([]);
  const [product, setProduct] = useState([]);
  const [priceInfo, setPriceInfo] = useState([]);
  const [productAllDetails, setProductAllDetails] = useState([]);
  const { product_id } = useParams();

  const productDetails = () => {
    const options = {
      method: "GET",
      url: `https://amazon24.p.rapidapi.com/api/product/${product_id}`,
      params: { country: "US" },
      headers: {
        "X-RapidAPI-Host": "amazon24.p.rapidapi.com",
        "X-RapidAPI-Key": "cce41dfademshe488954231b2a09p1b29e0jsne66353d8d037",
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
    productDetails();
  }, []);

  return (
    <div>
      <br></br>
      <div>
        <h1>{productTitle}</h1>
        <h3>Product Id : {product_id}</h3>

        <img
          src={productAllDetails.product_main_image_url}
          height={300}
          alt="All product Details"
        />

        <ul className="list-group mt-5">
          {Object.keys(product).map((prod) => (
            <li className="list-group-item">
              <div className="row">
                <div className="col-3 col-sm-2">
                  <span>
                    <b>{prod}</b>
                  </span>{" "}
                  :
                </div>
                <div className="col-9 col-sm-10">
                  <span>{product[prod]}</span>
                </div>
              </div>
            </li>
          ))}
          {Object.keys(priceInfo).map((prod) => (
            <li className="list-group-item">
              <div className="row">
                <div className="col-3 col-sm-2">
                  <span>
                    <b>{prod}</b>
                  </span>{" "}
                  :
                </div>
                <div className="col-9 col-sm-10">
                  <span>{priceInfo[prod]}</span>
                </div>
              </div>
            </li>
          ))}
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

export default Details;
