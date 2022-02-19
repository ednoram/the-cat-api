import React from "react";

import { HelmetLayout } from "layouts/index";

import styles from "./Home.module.scss";

const HomeContainer: React.FC = () => {
  return (
    <HelmetLayout title="Home" description="Cats from The Cat API.">
      <div className={styles.container}>
        <h1 className={styles.container__title}>The Cat API</h1>
      </div>
    </HelmetLayout>
  );
};

export default HomeContainer;
