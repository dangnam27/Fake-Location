import React, { useEffect, useState } from "react";

 function Filter() {
            const [data, setData] = useState([]);
            const [filter, setFilter] = useState(data);
            let [loading, setloading] = useState(false)
 
  var productsAPI =
    "https://raw.githubusercontent.com/sonnh7289/python3-download/main/location-data2.json?fbclid=IwAR1paTA_ucuBDjTSeiBK5wQM7tqmu9Ih6U-pxvb_t97Cp-QVPwAlDflEkNw";
  let componentMount = true;

  useEffect(() => {
    const getFilter = async () => {
      setloading(true)
      fetch(productsAPI)
        .then((res) => res.json())
        .then((res) => {
          if (componentMount) {
            setData(res);
            setFilter(res);
            setloading(false);
          }
        });
      return () => {
        
        componentMount = false;
      };
    };
    getFilter();
  }, []);
 
  const ShowProducts = () => {
    return (
      <>
        <div className="  mb-3 pt-1 ">
                                
                                <button 
                                    className=" fs-4 fw-bold col-md-2 col-xs-4"
                                    onClick={() => filter.product('Landscape')}
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
  
console.log(filter);
  return (
   <>
     {loading ? <setInterval /> : <ShowProducts/>}
   </>
);}
export default Filter;