import React, { useEffect, useState } from "react";
import axios from "axios";
import "./cart.css";

function Cart() {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get("http://14.225.7.179:8081/get_img/260");
        setProduct(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    getProduct();
  }, []);

  function Base64Image({ base64String, alt, className }) {
    const [src, setSrc] = useState(null);
    console.log(base64String);
    useEffect(() => {
      const image = new Image();
      image.onload = () => {
        setSrc(image.src);
      };
      image.src = `data:image/png;base64,${base64String}`;
    }, [base64String]);
    

    return <img alt={alt} className={className} src={src} />;
  }

  const ShowProduct = () => {
    if (!product) return null;
    return (
      <>
                <div className="card image-class">
                <Base64Image base64String={product.base64} alt="example image" />
                <div className="card-body">
                
                    <p>{product.name_img}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
                </div>
      
      </>
    );
  };

  return <div className="ms-5">{ShowProduct()}</div>;
}

export default Cart;
