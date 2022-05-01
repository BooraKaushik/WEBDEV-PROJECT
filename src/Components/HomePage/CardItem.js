import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { GetLikes } from "../Actions/GetLikes";
import Carousel from "./Carousel";
import LogInLikes from "./LogInLikes";
import LogOutLikes from "./LogoutLikes";
import MultiItemCarousel from "./MultiItemCarousel";

const Card = () => {
  const login = useSelector((state) => state.LogIn);
  const [likes, setLikes] = useState([]);
  useEffect(() => {
    GetLikes().then((data) => setLikes(data));
  }, []);
  return (
    <>
      {login.logedIn && (
        <div className="text-end mt-2">
          <h6 className="mb-0"> welcome, {login.user.userData.firstName}</h6>
        </div>
      )}
      <div className="pt-4 wd-carousel">
        <Carousel />
      </div>
      <br />

      {!login.logedIn || !(likes.length > 0) ? (
        <>
          <div className="wd-multi-item-carousel border rounded border-4 border-light">
            <div className="border border-top-0 border-end-0 border-4 border-start-0 border-light d-inline d-flex">
              <h4
                style={{ fontSize: "25px" }}
                className="w-100 wd-top-offers ps-5 pt-2 pb-2"
              >
                Previously Liked
              </h4>
              <div className="wd-view-all">
                <button className="btn btn-primary wd-view-port" type="button">
                  View All
                </button>
              </div>
            </div>
            <LogOutLikes />
          </div>
          <div className="wd-multi-item-carousel border rounded border-4 border-light">
            <div className="border border-top-0 border-end-0 border-4 border-start-0 border-light d-inline d-flex">
              <h4
                style={{ fontSize: "25px" }}
                className="w-100 wd-top-offers ps-5 pt-2 pb-2"
              >
                Top Offers
              </h4>
            </div>
            <MultiItemCarousel />
          </div>
        </>
      ) : (
        <>
          <div className="wd-multi-item-carousel border rounded border-4 border-light">
            <div className="border border-top-0 border-end-0 border-4 border-start-0 border-light d-inline d-flex">
              <h4
                style={{ fontSize: "25px" }}
                className="w-100 wd-top-offers ps-5 pt-2 pb-2"
              >
                Previously Likes
              </h4>
            </div>
            <LogInLikes />
          </div>
          <div className="wd-multi-item-carousel border rounded border-4 border-light">
            <div className="border border-top-0 border-end-0 border-4 border-start-0 border-light d-inline d-flex">
              <h4
                style={{ fontSize: "25px" }}
                className="w-100 wd-top-offers ps-5 pt-2 pb-2"
              >
                Top Offers
              </h4>
            </div>
            <MultiItemCarousel />
          </div>
        </>
      )}
    </>
  );
};
export default Card;
