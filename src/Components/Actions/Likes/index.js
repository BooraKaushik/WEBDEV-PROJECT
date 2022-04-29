import {
  AddLikeService,
  IsLikedService,
  RemoveLikeService,
} from "../../../Services/Likes";

export const isLikedAction = async (pid) => {
  const out = await IsLikedService(pid);
  return out;
};

export const addLikeAction = async (pid) => {
  const out = await AddLikeService(pid);
  console.log(out);
  return out;
};

export const removeLikeAction = async (pid) => {
  const out = await RemoveLikeService(pid);
  console.log(out);
  return out;
};
