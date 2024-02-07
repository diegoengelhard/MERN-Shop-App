import React, { useEffect, useMemo, useState } from 'react'
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// Import service
import service from '../../../redux/service/service';

// Import components
import Chart from '../../../components/Chart/Chart';

// Import styles
import './SingleProductPage.css'

// Import MUI icons
import { Publish } from "@material-ui/icons";

// Import toast
import { toast } from 'react-toastify';

const SingleProductPage = () => {
    // Set location from browser url
    const location = useLocation();
    const productId = location.pathname.split("/")[2]; // Get product id from url

    // Obtain product
    const [product, setProduct] = useState(null);
    useEffect(() => {
        // Obtain product from redux store
        service.findProductById(productId).then((data) => {
            setProduct(data);
        });
    }, [productId]);

    // Set states
    const [pTitle, setPTitle] = useState(product?.title);
    const [pDescription, setPDescription] = useState(product?.description);
    const [pPrice, setPPrice] = useState(product?.price);
    const [pImg, setPImg] = useState(product?.img);
    const [pInStock, setPInStock] = useState(product?.inStock);

    // Set dispatch
    const dispatch = useDispatch();

    // Set months array
    const MONTHS = useMemo(
        () => [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Agu",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ],
        []
    );

    // Handle Update product
    const handleUpdate = async (e) => {
        e.preventDefault();

        const newProduct = {
            title: pTitle || product.title,
            description: pDescription || product.description,
            price: pPrice || product.price,
            img: pImg || product.img,
            inStock: pInStock || product.inStock
        }

        try {
            dispatch(service.updateProduct(productId, newProduct));
            toast.success('Product has been updated!');
            // setTimeout(() => {
            //     window.location.reload();
            // }, 1000);
        } catch (error) {
            console.log(error);
        }
    }

    // useEffect to set product stats

    return (
        <div className="product">
            <div className="productTitleContainer">
                <h1 className="productTitle">Product</h1>
                <Link to="/newproduct">
                    <button className="productAddButton">Create</button>
                </Link>
            </div>
            <div className="productTop">
                {/* <div className="productTopLeft">
                    <Chart data={pStats} dataKey="Sales" title="Sales Performance" />
                </div> */}
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src={product?.img} alt="" className="productInfoImg" />
                        <span className="productName">{product?.title}</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">id:</span>
                            <span className="productInfoValue">{product?._id}</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">sales:</span>
                            <span className="productInfoValue">5123</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">in stock:</span>
                            <span className="productInfoValue">{product?.inStock ? 'Yes' : 'No'}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productBottom">
                <form className="productForm">
                    <div className="productFormLeft">
                        <label>Product Name</label>
                        <input
                            style={{ padding: 10, marginBottom: 20 }}
                            placeholder={product?.title}
                            type='text'
                            onChange={(e) => setPTitle(e.target.value)}
                        />
                        <label>Product Description</label>
                        <input
                            style={{ padding: 10, marginBottom: 20 }}
                            placeholder={product?.description}
                            type='text'
                            onChange={(e) => setPDescription(e.target.value)}
                        />
                        <label>Price</label>
                        <input
                            style={{ padding: 10, marginBottom: 20 }}
                            placeholder={product?.price}
                            type='text'
                            onChange={(e) => setPPrice(e.target.value)}
                        />
                        <label>In Stock</label>
                        <select
                            name="inStock"
                            id="idStock"
                            value={product?.inStock ? "true" : "false"}
                            onChange={(e) => setPInStock(e.target.value === "true")}
                        >
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                        </select>
                    </div>
                    <div className="productFormRight">
                        <div className="productUpload">
                            <img src={product?.img} alt="" className="productUploadImg" />
                            <input
                                style={{ padding: 10, marginBottom: 20 }}
                                type='text'
                                placeholder='Insert image url'
                                onChange={(e) => setPImg(e.target.value)}
                            />
                        </div>
                        <button className="productButton" onClick={handleUpdate}>Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SingleProductPage