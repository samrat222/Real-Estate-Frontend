import React from "react";
import { useLocation } from "react-router-dom";

const location = useLocation();

console.log(location);

const Success = () => {
  return <div>successfull</div>;
};

export default Success;
