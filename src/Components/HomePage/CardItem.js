import { useSelector } from "react-redux";
import Carousel from "./Carousel";
import LogInReview from "./LogInReview";
import LogOutLikes from "./LogoutLikes";

const Card = () => {
  const login = useSelector((state) => state.LogIn);

  return (
    <>
      <div className="pt-4 wd-carousel">
        <Carousel />
      </div>
      <br />

      {!login.logedIn ? (
        <div className="wd-multi-item-carousel border rounded border-4 border-light">
          <div className="border border-top-0 border-end-0 border-4 border-start-0 border-light d-inline d-flex">
            <h4
              style={{ fontSize: "25px" }}
              className="w-100 wd-top-offers ps-5 pt-2 pb-2"
            >
              Previously Liked
            </h4>
          </div>
          <LogOutLikes />
        </div>

      ) 
      :
       (
        <div className="wd-multi-item-carousel border rounded border-4 border-light">
          <div className="border border-top-0 border-end-0 border-4 border-start-0 border-light d-inline d-flex">
            <h4
              style={{ fontSize: "25px" }}
              className="w-100 wd-top-offers ps-5 pt-2 pb-2"
            >
              Top Offers
            </h4>
          </div>
          {/* <MultiItemCarousel /> */}

          <LogInReview/>
        </div>
      )}
    </>
  );
};
export default Card;
