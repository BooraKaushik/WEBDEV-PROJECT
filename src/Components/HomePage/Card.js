import React, { useState, useEffect } from "react";
import axios from "axios";

const Card = () => {
  const [product, setProduct] = useState([]);

  const SearchByTitle = () => {
    var colors = ["apple", "bat", "green", "yellow"];
    var randColor = colors[Math.floor(Math.random() * colors.length)];
    const options = {
      method: "GET",
      url: "https://amazon24.p.rapidapi.com/api/product",
      params: {
        categoryID: "aps",
        keyword: randColor,
        country: "US",
        page: "1",
      },
      headers: {
        "X-RapidAPI-Host": "amazon24.p.rapidapi.com",
        "X-RapidAPI-Key": "981b933be3mshfee1235ee259b39p18a3b3jsn9285377edb23",
      },
    };
    axios
      .request(options)
      .then(function (response) {
        setProduct(response.data.docs.slice(0, 5));
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  useEffect(() => {
    console.log(localStorage.getItem("LoginToken"));
    SearchByTitle();
  }, []);

  return (
    <>
      <div>
        <h1>Card Items</h1>

        <div className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="" className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="..." className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>
                  Some representative placeholder content for the second slide.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {product &&
            product.map((p) => (
              <div className="col-3 ">
                <img src={p.product_main_image_url} alt="..." />
                <h5>{p.product_title}</h5>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};
export default Card;
