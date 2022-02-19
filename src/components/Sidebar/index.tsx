import React, { useMemo } from "react";
import classNames from "classnames";

import { ICategory } from "types/index";

import styles from "./Sidebar.module.scss";
import { Loader } from "../index";

interface IProps {
  categories: ICategory[];
  activeCategoryId: number | null;
  setActiveCategoryId: (id: number) => void;
}

const Sidebar: React.FC<IProps> = ({
  categories,
  activeCategoryId,
  setActiveCategoryId,
}) => {
  const categoryItems = useMemo(
    () =>
      categories.map(({ id, name }) => {
        const isActive = id === activeCategoryId;
        const boxClassName = classNames(styles.content__categories__item, {
          [styles.content__categories__item_active]: isActive,
        });

        const handleClick = () => {
          setActiveCategoryId(id);
        };

        return (
          <React.Fragment key={id}>
            <div onClick={handleClick} className={boxClassName}>
              <p>{name}</p>
            </div>
          </React.Fragment>
        );
      }),
    [categories, activeCategoryId]
  );

  return (
    <div className={styles.content}>
      <p className={styles.content__heading}>Categories</p>
      <div className={styles.content__categories}>
        {categories.length ? (
          categoryItems
        ) : (
          <Loader className={styles.content__categories__loader} />
        )}
      </div>
    </div>
  );
};

export default Sidebar;
