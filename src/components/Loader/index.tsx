import React from "react";

import styles from "./Loader.module.scss";

interface IProps {
  className?: string;
}

const Loader: React.FC<IProps> = ({ className }) => {
  return (
    <div className={className}>
      <div className={styles.spinner}>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};
export default Loader;
