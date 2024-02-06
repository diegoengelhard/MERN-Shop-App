import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// Import styles
import './ProductsPage.css'

// Import MUI
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";

const ProductsPage = () => {
    // Set dispatch
    const dispatch = useDispatch();

    // Obtain products from redux store
    // TODO: Get products from redux store

    // Use effect to fetch products
    // TODO: Fetch products from backend

    // Handle delete product
    const handleDelete = (id) => { }

    // Set columns for data grid
    const columns = [
        { field: "_id", headerName: "ID", width: 220 },
        {
            field: "product",
            headerName: "Product",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="productListItem">
                        <img className="productListImg" src={params.row.img} alt="" />
                        {params.row.title}
                    </div>
                );
            },
        },
        { field: "inStock", headerName: "Stock", width: 200 },
        {
            field: "price",
            headerName: "Price",
            width: 160,
        },
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/product/" + params.row._id}>
                            <button className="productListEdit">Edit</button>
                        </Link>
                        <DeleteOutline
                            className="productListDelete"
                            onClick={() => handleDelete(params.row._id)}
                        />
                    </>
                );
            },
        },
    ];
    return (
        <div className="productList">
            {/* TODO: DATA GRID */}
            <h2>Data Grid here</h2>
        </div>
    )
}

export default ProductsPage