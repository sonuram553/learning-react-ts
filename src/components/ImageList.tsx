import React from "react";

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
    return (
      <img
        style={{ display: "block", margin: "0 auto" }}
        src={urls.regular}
        alt={description}
        width="500"
        key={id}
      />
    );
  });

  return <div>{imgTags}</div>;
};

export default ImageList;
