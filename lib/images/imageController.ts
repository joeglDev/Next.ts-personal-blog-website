import { getImage } from "./imageModel";

export const getBlogPostServerProps = async (id: number) => {
    const res = await getImage(id);
    return res;
  };