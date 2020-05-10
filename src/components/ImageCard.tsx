import React from "react";
import { Image } from "../types";

interface Props {
  image: Image;
}

class ImageCard extends React.Component<Props> {
  imageRef: any;
  state: {
    spans: number;
  };

  constructor(props: Props) {
    super(props);
    this.state = { spans: 0 };
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setGridSpans);
  }

  setGridSpans = () => {
    const height = this.imageRef.current.clientHeight;

    const spans = Math.ceil(height / 20);

    this.setState({ spans });
  };

  render() {
    const { urls, description } = this.props.image;

    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} src={urls.regular} alt={description} />
      </div>
    );
  }
}

export default ImageCard;
