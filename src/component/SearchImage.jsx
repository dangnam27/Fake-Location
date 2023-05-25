import React, { useEffect, useState } from "react";
import '../style/SearchImage.css';

function SearchImage() {

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
  console.log(data)

  const ShowSearch = () => {

    return (
    <>
             {filter &&
          filter.map((product) => {
            return (
              <>
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
              </>
            );
          })}
    </>)}

  return (
    <>
    <div className="container contai ">
    <div className="searchh">
    <form className="d-flex form">
            <i class="fa-solid fa-magnifying-glass p-1"></i>
            <input
              className="form-control"
              id="Search"
              type="search"
              placeholder="Tìm kiếm thứ bạn thích"
              aria-label="Search"
            />
            </form>  
            </div> 
            <div className="Image">
            <ShowSearch/>   
            </div>
            </div>
    </>
   
  )
}

export default SearchImage ;