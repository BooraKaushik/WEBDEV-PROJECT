import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Rating } from "@mui/material";
import { CreateReviewAction } from "../Actions/Reviews";
const CreateReviews = () => {
  const Review = {
    pid: "",
    review: "",
    rating: "",
  };
  const [initReview, setReview] = useState(Review);
  const [val, setVal] = useState(0);
  Review.rating = val;
  const [errors, updateErrors] = useState({});
  const productID = useParams();
  Review.pid = productID.productID;
  const validation = (value) => {
    const errors = {};
    if (!value.review) {
      errors.review = "Reviews cannot be empty";
    }
    return errors;
  };
  const putData = (event) => {
    const { name, value } = event.target;
    setReview({ ...initReview, [name]: value });
    console.log("review", initReview);
  };
  const dataSubmit = (event) => {
    event.preventDefault();
    updateErrors(validation(initReview));

    console.log("data", initReview);
    if (!errors.review) {
      CreateReviewAction(initReview).then((data) => {
        console.log(data);
        console.log('reviews',initReview);
      });
    }
  };
  useEffect(()=>{
    setReview({...initReview,rating:val})
  },[val])
  return (
    <>
      <div className="form">
        <div class="form-group">
          <label for="review">Review</label>
          <textarea
            class="form-control"
            id="review"
            name="review"
            rows="4"
            onChange={(event) => putData(event)}
          ></textarea>
          <p className="text-danger">{errors.review ? errors.review : ""}</p>
        </div>
        <div className="row">
          <span>Rating&nbsp;&nbsp;</span>
          <Rating
            name="simple-controlled"
            value={val}
            onChange={(event, newValue) => {
              if(newValue){
              setVal(newValue);
              }else{
                setVal(0);
            }}}
          />
        </div>
        <div className="row">
          <button
            type="button"
            class="btn btn-primary"
            onClick={(event) => dataSubmit(event)}
          >
            Add Review
          </button>
        </div>
      </div>
    </>
  );
};
export default CreateReviews;
