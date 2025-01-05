import { useCallback, useEffect, useState } from "react";
import { fetchImages } from "../../../../lib/images/imageController";
import { ImageModel } from "../../../../lib/images/imageTypes";
import { BlogpostImage } from "./blogpostImageContainer.style";

interface BlogpostImageContainerProps {
  blogpostId: number;
}

export const BlogpostImageContainer = ({
  blogpostId,
}: BlogpostImageContainerProps) => {
  const [imageObj, setImageObj] = useState<ImageModel | undefined>();

  const imageData = useCallback(
    async () => await fetchImages(blogpostId),
    [blogpostId],
  );

  useEffect(() => {
    imageData().then((data) => setImageObj(data));
  }, [setImageObj, imageData]);

  return (
    <>
      {imageObj ? (
        <div>
          <BlogpostImage
            src={`data:image/png;base64, ${imageObj.img}`}
            alt={imageObj.name}
          />
        </div>
      ) : null}
    </>
  );
};
