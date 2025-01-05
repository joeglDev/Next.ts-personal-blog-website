import { getImage } from "./imageModel";

export const fetchImages = async (id: number) => {
  const res = await getImage(id);
  return res;
};
