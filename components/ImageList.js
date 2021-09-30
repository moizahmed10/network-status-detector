import React, { useState, useEffect, useContext } from "react";
import images from "../helpers/Images";
import Img from "./Img";
import { NetworkContext } from "../pages/_app";

const ImageComp = () => {
  const { status } = useContext(NetworkContext);
  const [check, setCheck] = useState(status);

  useEffect(() => {
    setCheck(status);
  }, [status]);

  return (
    <div>
      {images.map((image) => (
        <Img
          src={image.image}
          width={image.size.width}
          height={image.size.height}
          key={image.id + status}
        />
      ))}
    </div>
  );
};

export default ImageComp;
