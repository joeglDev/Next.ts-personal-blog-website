import { getImage } from "../images/imageModel";
import { postSignIn } from "./users-model";

export const fetchSignin = async (username: string, password: string) => {
  const res = await postSignIn(username, password);

  return res;
};
