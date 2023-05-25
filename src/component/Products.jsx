import React, { useEffect, useState } from "react";

import Filter from "./Filter";

function Products() {
  let loading = false;

  setTimeout(() => {
      loading = false;
  }, 1000);
  const Loading = () => {
    
    return <>Loading...</>}
 
  return (
    <>
      <div className="row justify-content-center p-5">
         {loading ? <Loading /> : <Filter/>}
      </div>
    </>
  );
}

export default Products;
