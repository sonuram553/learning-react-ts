import React from "react";
import "./ImageList.scss";

interface Image {
  urls: { regular: string };
  id: string;
  description: string;
}

interface Props {
  images: Image[];
}

const ImageList = (props: Props) => {
  const imgTags = props.images.map(({ urls, description, id }) => {
    return <img src={urls.regular} alt={description} key={id} />;
  });

  return <div className="image-list">{imgTags}</div>;
};

export default ImageList;
