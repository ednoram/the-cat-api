import React from "react";

import { HelmetLayout } from "layouts/index";

import styles from "./NotFound.module.scss";

const PAGE_TITLE = "404 Not Found";
const PAGE_DESCRIPTION = "Page not found";

const NotFoundContainer: React.FC = () => {
  return (
    <HelmetLayout title={PAGE_TITLE} description={PAGE_DESCRIPTION}>
      <div className={styles.container}>
        <h1 className={styles.container__title}>Page Not Found</h1>
      </div>
    </HelmetLayout>
  );
};

export default NotFoundContainer;
