import React from "react";
import "./ImageList.scss";
import { Image } from "../types";
import ImageCard from "./ImageCard";

interface Props {
  images: Image[];
}

const ImageList = (props: Props) => {
  const imgTags = props.images.map((image) => {
    return <ImageCard key={image.id} image={image} />;
  });

  return <div className="image-list">{imgTags}</div>;
};

export default ImageList;
