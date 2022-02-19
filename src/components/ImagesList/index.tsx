import React, { useMemo } from "react";

import { IImage } from "types/index";
import { ImageCard, Loader } from "components/index";

import styles from "./ImagesList.module.scss";

interface IProps {
  images: IImage[];
  loading: boolean;
  handleNextPage: () => void;
}

const ImagesList: React.FC<IProps> = ({ images, loading, handleNextPage }) => {
  const imageCards = useMemo(
    () =>
      images.map((image) => (
        <React.Fragment key={image.id}>
          <ImageCard image={image} />
        </React.Fragment>
      )),
    [images]
  );

  const noCategoryText = !loading && (
    <p className={styles.error_text}>Please, select a category.</p>
  );

  return (
    <div>
      {images.length ? (
        <React.Fragment>
          <div className={styles.grid}>{imageCards}</div>
          <div className={styles.load_more}>
            {!loading && (
              <button
                onClick={handleNextPage}
                className={styles.load_more__button}
              >
                Load More
              </button>
            )}
          </div>
        </React.Fragment>
      ) : (
        noCategoryText
      )}
      {loading && <Loader className={styles.loader} />}
    </div>
  );
};

export default ImagesList;
