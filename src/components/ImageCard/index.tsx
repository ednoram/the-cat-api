import React from "react";

import { IImage } from "types/index";

import styles from "./ImageCard.module.scss";

interface IProps {
  image: IImage;
}

const ImageCard: React.FC<IProps> = ({ image }) => {
  return (
    <div className={styles.content}>
      <img
        loading="lazy"
        alt="cat image"
        src={image.url}
        className={styles.content__image}
      />
    </div>
  );
};

export default ImageCard;
