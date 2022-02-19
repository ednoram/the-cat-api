import React from "react";
import { Helmet } from "react-helmet";
import { ToastContainer } from "react-toastify";

interface IProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

const HelmetLayout: React.FC<IProps> = ({ title, children, description }) => (
  <React.Fragment>
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
    <main>{children}</main>
    <ToastContainer theme="colored" position="top-center" autoClose={6000} />
  </React.Fragment>
);

export default HelmetLayout;
