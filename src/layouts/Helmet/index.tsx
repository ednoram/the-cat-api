import React from "react";
import { Helmet } from "react-helmet";

interface IProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

const HelmetLayout: React.FC<IProps> = ({ title, children, description }) => (
  <>
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
    <main>{children}</main>
  </>
);

export default HelmetLayout;
