import React, { useEffect, useState } from "react";

import Filter from "./Filter";


function Products() {
 
    let loading = false;
  function asyncFunction() {
    setTimeout(() => {
      loading = false;
    }, 3000);
 }
 asyncFunction();
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
