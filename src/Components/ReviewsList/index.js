import ReviewsListItem from "./ReviewListItem";

const ReviewsList = ({Reviews}) => {
return(<>
  <div className="list-group">
    {Reviews.map((x) => {
      return (
        <ReviewsListItem
          pname={x.product.name}
          review={x.review}
          rating={x.rating}
        ></ReviewsListItem>
      );
    })}
  </div>
  </>);
};
export default ReviewsList;
