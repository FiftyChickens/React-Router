import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleBack = () => {
    // Check if the current location is not the root
    if (location.pathname !== "/") {
      navigate(-1);
    } else {
      return <p>hi</p>;
    }
  };
  return (
    location.pathname !== "/" && (
      <button className="breadcrumb" onClick={handleBack}>
        Go Back
      </button>
    )
  );
};

export default Breadcrumb;
