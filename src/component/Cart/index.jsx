import React, { useEffect, useState } from "react";
import axios from "axios";
import "./cart.css";
import { useParams } from "react-router-dom";

function Cart() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(`http://14.225.7.179:8081/get_img/${id}`);
        setProduct(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    getProduct();
  }, [id]);
  function Base64Image({ base64String, alt, className }) {
    const [src, setSrc] = useState(null);
    useEffect(() => {
      const image = new Image();
      image.onload = () => {
        setSrc(image.src);
      };
      image.src = `data:image/png;base64,${base64String.substr(
        2,
        base64String.length - 3
      )}`;
    }, [base64String]);
    console.log("link_anh:", base64String.substr(2, base64String.length - 3));

    return <img alt={alt} className={className} src={src} />;
  }

  const ShowCart = () => {
    if (!product) return null;
    return (
      <div className="image-class">
        <div className="card">
          <Base64Image base64String={product.base64} alt="example image" />
          <div className="card-body">
            <h5>{product.name_img}</h5>
            <a href="/" className="btn btn-primary">
              Go to homepage
            </a>
          </div>
        </div>
      </div>
    );
  };

  return <div className="ms-5">
    {ShowCart()}</div>;
}

export default Cart;
