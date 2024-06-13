import React from "react";
import ListProducts from "../components/ListProducts";
import useAxios from "../hooks/useAxios";

const AllProductView = () => {
  const [data, error, loading] = useAxios(url, options);

  return <ListProducts />;
};

export default AllProductView;
