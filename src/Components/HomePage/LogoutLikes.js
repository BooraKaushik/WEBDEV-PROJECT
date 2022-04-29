import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./multicarousel.css";
import {findAllLikes} from "../Actions/Likes";
import { useDispatch, useSelector } from "react-redux";

const PreviousBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <i class="fa-solid fa-angle-left" style={{ color: "blue" }}></i>
    </div>
  );
};

const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <i class="fa-solid fa-angle-right" style={{ color: "blue" }}></i>
    </div>
  );
};

const LogOutLikes = () => {
    const likes = useSelector((state) => state.likes);
    const dispatch = useDispatch();
    useEffect(() => {findAllLikes(dispatch).catch(console.error)}, [dispatch]);

  const Card = ({ p }) => {
    

    return (
      <div style={{ textAlign: "center", margin: "20px" }}>
          {console.log("rvnsuonuovneoucan")}
          {console.log(p.product.name)}
          
        <img
          className="multi-image"
          src={p.product.imgUrl}
          
          style={{
            width: "100%",
            height: "210px",
            objectFit: "contain",
            marginBottom: "5px",
            marginTop: "5px",
          }}
          alt="Product Details"
        />
        <div class="mt-2 d-flex align-items-center">
          <div className="small-ratings">
            {" "}
            <i class="fa fa-star rating-color"></i>{" "}
            <i class="fa fa-star rating-color"></i>{" "}
            <i class="fa fa-star rating-color"></i> <i class="fa fa-star"></i>{" "}
            <i class="fa fa-star"></i>{" "}
          </div>
        </div>
        <h5 className="text" style={{ fontSize: "15px", padding: "5px 0" }}>
          {p.product.name}
        </h5>
        <h5 style={{ fontSize: "15px", padding: "5px 0" }}>
          <span style={{ textDecoration: "line-through", color: "grey" }}>
            ${Number(p.product.price) + 100}
          </span>
          <span style={{ color: "green", padding: "0px 2px" }}>
            ${p.product.price}
          </span>
        </h5>
      </div>
    );
  };

  const properties = {
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    prevArrow: <PreviousBtn />,
    nextArrow: <NextBtn />,
    slidesToShow: 4,
    centerMode: true,
    centerPadding: "150px",
    responsive: [
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <>
    {console.log("checking",likes)}
      <Slider {...properties}>
        {likes?.map((p) => <Card p={p} />)}
      </Slider>
    </>
  );
};
export default LogOutLikes;
