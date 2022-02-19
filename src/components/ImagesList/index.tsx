import React, { useMemo } from "react";

import { IImage } from "types/index";
import { ImageCard, Loader } from "components/index";

import styles from "./ImagesList.module.scss";

interface IProps {
  images: IImage[];
  loading: boolean;
}

const ImagesList: React.FC<IProps> = ({ images, loading }) => {
  const imageCards = useMemo(
    () =>
      images.map((image) => (
        <React.Fragment key={image.id}>
          <ImageCard image={image} />
        </React.Fragment>
      )),
    [images]
  );

  const notLoadingContent = images.length ? (
    <div className={styles.grid}>{imageCards}</div>
  ) : (
    <p className={styles.error_text}>Please, select a category.</p>
  );

  return (
    <div>
      {loading ? <Loader className={styles.loader} /> : notLoadingContent}
    </div>
  );
};

export default ImagesList;
