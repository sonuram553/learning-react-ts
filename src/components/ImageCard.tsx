import React from "react";
import { Image } from "../types";

interface Props {
  image: Image;
}

class ImageCard extends React.Component<Props> {
  imageRef: any;

  constructor(props: Props) {
    super(props);
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setGridSpans);
  }

  setGridSpans = () => {
    console.log(this.imageRef.current.clientHeight);
  };

  render() {
    const { urls, description } = this.props.image;

    return (
      <div>
        <img ref={this.imageRef} src={urls.regular} alt={description} />
      </div>
    );
  }
}

export default ImageCard;
