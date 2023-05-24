import React, { useEffect, useState } from "react";
import Post from "./Post";

function Products() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);

  var productsAPI =
    "https://raw.githubusercontent.com/sonnh7289/python3-download/main/location-data2.json?fbclid=IwAR1paTA_ucuBDjTSeiBK5wQM7tqmu9Ih6U-pxvb_t97Cp-QVPwAlDflEkNw";
  let componentMount = true;
  
  
  useEffect(() => {
    const getProducts = async () => {
      fetch(productsAPI)
        .then((res) => res.json())
        .then((res) => {
          if (componentMount) {
            setData(res);
            setFilter(res);
          }
        });
      return () => {
        componentMount = false;
      };
    };
    getProducts();
  }, []);

  // post APi
  
  const ShowProducts = () => {
    return (
      <>
      
        <div className="  mb-3 pt-1 ">
                                
                                <button 
                                    className="btn btn-outline-danger m-1 fs-4 lead fw-bold col-md-2 col-xs-4"
                                    onClick={() => filter.Product('Landscape')}
                                >
                                    Landscape
                                </button>
                                
                            </div>
        {filter &&
          filter.map((product) => {
            return (
              <>
                <div className=" col-md-2 mb-4 col-sm-6  ">
                  <div className="card h-100 text-center " key={product.id}>
                    <img
                      src={product.link_img}
                      className="card-img-top"
                      alt="#"
                      height="150px"
                    />
                    <div className=" card-body">
                      <p className="card-text lead fw-bold">
                        {product.location}
                      </p>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
      </>
    );
  };
  return (
    <>
      <div className="row justify-content-center p-5">
        
        <ShowProducts />
      </div>
    </>
  );
}

export default Products;
