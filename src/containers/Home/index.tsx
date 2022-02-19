import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Sidebar } from "components/index";
import { HelmetLayout } from "layouts/index";
import { categoryActions } from "store/actions/index";
import { categorySelectors } from "store/selectors/index";

import styles from "./Home.module.scss";

const PAGE_TITLE = "The Cat API";
const PAGE_DESCRIPTION = "Cats from The Cat API.";

const HomeContainer: React.FC = () => {
  const { categories, activeCategoryId } = useSelector(
    categorySelectors.selectCategoriesState
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(categoryActions.fetchCategories());
  }, []);

  const setActiveCategoryId = (id: number) => {
    dispatch(categoryActions.setActiveCategoryId(id));
  };

  return (
    <HelmetLayout title={PAGE_TITLE} description={PAGE_DESCRIPTION}>
      <div className={styles.container}>
        <h1 className={styles.container__title}>The Cat API</h1>
        <Sidebar
          categories={categories}
          activeCategoryId={activeCategoryId}
          setActiveCategoryId={setActiveCategoryId}
        />
      </div>
    </HelmetLayout>
  );
};

export default HomeContainer;
