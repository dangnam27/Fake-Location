
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'


function LandScape() {
    const { id } = useParams()

    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        const getLandScape = async () => {
            setLoading(true)
            fetch(
                `https://raw.githubusercontent.com/dangnam27/Fake-Location/master/db.json`
            )
                .then((res) => res.json())
                .then((res) => {
                    setProduct(res)
                    setLoading(false)
                })
        }
        getLandScape()
    }, [])
    // console.log(product)
    const Loading = () => {
        return <>Loading...</>
    }
    const ShowProduct = () => {
        if (product)
            return (
                <>
                    <div className="col-md-6">
                        <img
                            src={product.link_img}
                            alt=""
                            height="400px"
                            width="400px"
                        ></img>
                    </div>
                    <div className="col-md-6">
                        <h4 className="text-uppercase text-back-50">
                            {product.location}
                        </h4>
                        <h2 className="display-5"> {product.categories}</h2>

                        <h3 className="display-6 fw-bold my-4">
                            {product.giá}
                        </h3>
                        <div className="float-none">      
                        </div>
                    </div>
                </>
            )
    }

    return (
        <div>
            <div className="container py-5">
                <div className="row py-4">
                    {loading ? <Loading /> : <ShowProduct />}
                </div>
            </div>
        </div>
    )
}

export default LandScape;
