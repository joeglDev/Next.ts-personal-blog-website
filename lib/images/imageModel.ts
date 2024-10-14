import { ImageModel } from "./imageTypes";

const localhostPort = 5181;

export const getImage = async (id: number): Promise<ImageModel | undefined> => {
  try {
    const res = await fetch(`http://localhost:${localhostPort}/api/image/${id}`);
    return await res.json();
  } catch (e) {
    console.log("error", e);
  }
};