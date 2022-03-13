import React, { useState, useMemo } from "react";
import classNames from "classnames";

import { ICategory } from "types/index";
import { ReactComponent as DropdownIcon } from "assets/DropdownIcon.svg";

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
  const [isOpen, setIsOpen] = useState(true);

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

  const categoriesContent = isOpen && categoryItems;

  const handleHeadingClick = () => {
    setIsOpen(!isOpen);
  };

  const headingIconClasses = classNames(styles.content__heading__icon, {
    [styles.content__heading__icon_open]: isOpen,
  });

  return (
    <div className={styles.content}>
      <p
        role="button"
        onClick={handleHeadingClick}
        className={styles.content__heading}
      >
        Categories
        <DropdownIcon className={headingIconClasses} />
      </p>
      <div className={styles.content__categories}>
        {categories.length ? (
          categoriesContent
        ) : (
          <Loader className={styles.content__categories__loader} />
        )}
      </div>
    </div>
  );
};

export default Sidebar;
