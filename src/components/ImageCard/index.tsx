import React from "react";

import { IImage } from "types/index";

import styles from "./ImageCard.module.scss";

interface IProps {
  image: IImage;
}

const ImageCard: React.FC<IProps> = ({ image }) => {
  return (
    <div className={styles.content}>
      <img className={styles.content__image} src={image.url} alt="cat image" />
    </div>
  );
};

export default ImageCard;
