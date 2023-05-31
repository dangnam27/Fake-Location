import React, { useEffect, useState } from "react";
import LandScape from "./LandScape";

function Filter() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  let [loading, setloading] = useState(false);
  var productsAPI =
    "https://raw.githubusercontent.com/dangnam27/Fake-Location/master/db.json";
  let componentMount = true;

  useEffect(() => {
    const getFilter = async () => {
      setloading(true);
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
  // console.log(data);
  const ShowProducts = () => {
    return (
      <>
        <div className="  mb-3 pt-1 ">
          <a href="./LandScape">
            <button className=" fs-4 fw-bold col-md-2 col-xs-4">
              Landscape
            </button>
          </a>
        </div>
        {filter &&
          filter.map((product) => {
            return (
              <>
                <div className=" col-md-2 mb-4 col-sm-6  ">
                  <a href="/LandScape" className="nav-link">
                    <div className="card h-100 text-center " key={product.id}>
                      <img
                        src={product.link_img}
                        className="card-img-top"
                        alt="Loading..."
                        height="150px"
                      />
                      <div className=" card-body">
                        <p className="card-text lead fw-bold">
                          {product.location}
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              </>
            );
          })}
      </>
    );
  };

  return <>{loading ? loading : <ShowProducts />}</>;
}
export default Filter;
