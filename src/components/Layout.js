import React from "react";
import PropTypes from "prop-types";
import Navbar from "./Navbar";

function Layout(props) {
  const { children } = props;
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
