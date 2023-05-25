import React, { useEffect, useState } from 'react'
import Products from "./Products";



function LandScape() {

    const [data, setData] = useState([])
    const [filter, setFilter] = useState(data)

    let componentMount =true;

    useEffect(() => {
        const getFilter = async () => {
           
            fetch('https://raw.githubusercontent.com/dangnam27/Fake-Location/master/db.json')
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
    getFilter();
      }, [])
      const ShowProducts = () => {
        return (
          <>
            {
              filter.map((product) => {
                return (
                  <>
                    <div className=" col-md-2 mb-4 col-sm-6  ">
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
                    </div>
                  </>
                );
              })}
          </>
        )};
  return (
    
    <div className="row justify-content-center p-5">
        <ShowProducts/>
      </div>
    
  )
}

export default LandScape;