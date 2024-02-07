import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// Import service
import service from '../../../redux/service/service';

// Import styles
import './ProductsPage.css'

// Import MUI
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";

// Import toast
import { toast } from 'react-toastify';

const ProductsPage = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.product.products);

    useEffect(() => {
        dispatch(service.getProducts());
    }, [dispatch]);

    const handleDelete = (id) => {
        // deleteProduct(id, dispatch);
        dispatch(service.deleteProduct(id));
        toast.success('Product has been deleted!');
        setTimeout(() => {
            window.location.reload();
        }, 1000);
    };

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
        { field: "description", headerName: "Description", width: 300 },
        { field: "price", headerName: "Price", width: 160 },
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
            <DataGrid
                rows={products}
                disableSelectionOnClick
                columns={columns}
                getRowId={(row) => row._id}
                pageSize={8}
                rowsPerPageOptions={[8, 10, 25, 50, 100]}
                checkboxSelection
                pagination
            />
        </div>
    );
}

export default ProductsPage