import { Rating } from "@mui/material";

const ReviewsListItem=({pname,review,rating})=>{
    return(
        <>
        <div className="list-group-item">
            <div className="row">
                <span style={{fontSize:"1.5rem"}}>Product Name:&nbsp;&nbsp;{pname}</span>
            </div>
            <div className="row">
                <span style={{fontSize:"1.5rem"}}>Review:&nbsp;&nbsp;{review}</span>
            </div>
            <div className="row">
            <Rating name="read-only" value={rating} readOnly />
            </div>
        </div>
        </>
    )

}
export default ReviewsListItem;