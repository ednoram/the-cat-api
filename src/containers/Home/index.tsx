import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { HelmetLayout } from "layouts/index";
import { Sidebar, ImagesList } from "components/index";
import { categoryActions, imageActions } from "store/actions/index";
import { categorySelectors, imageSelectors } from "store/selectors/index";

import styles from "./Home.module.scss";
import { selectPaginationParams } from "../../store/selectors/images";

const PAGE_TITLE = "Cats from The Cat API";
const PAGE_DESCRIPTION =
  "This is a website that displays cat images form The Cat API";

const HomeContainer: React.FC = () => {
  const { categories, activeCategoryId } = useSelector(
    categorySelectors.selectCategoriesState
  );
  const { images, loading: loadingImages } = useSelector(
    imageSelectors.selectImagesState
  );

  const imagePagination = useSelector(selectPaginationParams);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(categoryActions.fetchCategories());
  }, []);

  useEffect(() => {
    if (activeCategoryId) {
      const { limit, page } = imagePagination;
      dispatch(
        imageActions.fetchImages({
          page,
          limit,
          categoryId: activeCategoryId,
        })
      );
    }
  }, [activeCategoryId, imagePagination.page]);

  const setActiveCategoryId = (id: number) => {
    dispatch(categoryActions.setActiveCategoryId(id));
  };

  const handleNextPage = () => {
    dispatch(imageActions.setPage(imagePagination.page + 1));
  };

  return (
    <HelmetLayout title={PAGE_TITLE} description={PAGE_DESCRIPTION}>
      <div className={styles.container}>
        <h1 className={styles.container__title}>Cats</h1>
        <div className={styles.container__content}>
          <Sidebar
            categories={categories}
            activeCategoryId={activeCategoryId}
            setActiveCategoryId={setActiveCategoryId}
          />
          <ImagesList
            images={images}
            loading={loadingImages}
            handleNextPage={handleNextPage}
          />
        </div>
      </div>
    </HelmetLayout>
  );
};

export default HomeContainer;
