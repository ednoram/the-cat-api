import React from "react";

import styles from "./NotFound.module.scss";

const NotFoundContainer: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.container__title}>Page Not Found</h1>
    </div>
  );
};

export default NotFoundContainer;
