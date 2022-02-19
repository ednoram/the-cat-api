import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { HelmetLayout } from "layouts/index";
import { Sidebar, ImagesList } from "components/index";
import { categoryActions, imageActions } from "store/actions/index";
import { categorySelectors, imageSelectors } from "store/selectors/index";

import styles from "./Home.module.scss";

const PAGE_TITLE = "The Cat API";
const PAGE_DESCRIPTION = "Cats from The Cat API.";

const HomeContainer: React.FC = () => {
  const { categories, activeCategoryId } = useSelector(
    categorySelectors.selectCategoriesState
  );
  const { images, loading: loadingImages } = useSelector(
    imageSelectors.selectImagesState
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(categoryActions.fetchCategories());
  }, []);

  useEffect(() => {
    if (activeCategoryId) {
      dispatch(imageActions.fetchImages());
    }
  }, [activeCategoryId]);

  const setActiveCategoryId = (id: number) => {
    dispatch(categoryActions.setActiveCategoryId(id));
  };

  return (
    <HelmetLayout title={PAGE_TITLE} description={PAGE_DESCRIPTION}>
      <div className={styles.container}>
        <h1 className={styles.container__title}>The Cat API</h1>
        <div className={styles.container__content}>
          <Sidebar
            categories={categories}
            activeCategoryId={activeCategoryId}
            setActiveCategoryId={setActiveCategoryId}
          />
          <ImagesList images={images} loading={loadingImages} />
        </div>
      </div>
    </HelmetLayout>
  );
};

export default HomeContainer;
