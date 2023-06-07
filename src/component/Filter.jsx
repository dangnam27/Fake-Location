import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
function Filter() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setloading] = useState(false);
  

  let componentMount = true;

  useEffect(() => {
    const getFilter = async () => {
      setloading(true);
      const res = await axios.get(`http://14.225.7.179:8081/get_img/`)
          if (componentMount) {
            setData(res.data);
            setFilter(res.data);
            setloading(false);
          }

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
          <a href="/LandScape">
            <button className=" fs-4 fw-bold col-md-2 col-xs-4">
              Landscape
            </button>
          </a>
        </div>
        {filter &&
          filter.map((product) => {
            return (
              <>
                <div className=" col-md-2 mb-4 col-sm-6 ">
                  <div className="card h-100 text-center " key={product.id}>
                    <NavLink to={`/Cart/${product.id}`} className="btn">
                      <img
                        src={product.link_img}
                        className="card-img-top"
                        alt="Loading..."
                        height="250px"
                      />
                      <div className=" card-body">
                        <p className="card-text lead fw-bold">{product.name}</p>
                      </div>
                    </NavLink>
                  </div>
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
