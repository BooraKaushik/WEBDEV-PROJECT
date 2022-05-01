import { getUserInfo } from "../../../Services/AddAddress";

export const GetReviewsAction = async () => {
    const likes = await getUserInfo();
    return likes.user.reviews;
};
