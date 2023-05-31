import React, { useEffect, useState } from "react";

import Filter from "./Filter";


function Products() {
 
    let loading = false;

  const Loading = () => {
    return <> Loading...</>
  }
  console.log(loading)
  return (
    <>
      <div className="row justify-content-center p-5">
         {loading ? <Loading /> : <Filter/>}
      </div>
    </>
  );
}

export default Products;
