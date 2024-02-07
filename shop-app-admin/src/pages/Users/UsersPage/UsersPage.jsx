import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// Import service
import service from '../../../redux/service/service';

// Import styles
import './UsersPage.css'

// Import MUI 
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";

const UsersPage = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users.products);

    useEffect(() => {
        dispatch(service.getUsers());
    }, [dispatch]);

    // Handle delete user
    const handleDelete = (id) => { }

    // Set columns for grid
    const columns = [
        { field: "_id", headerName: "ID", width: 220 },
        {
            field: "user",
            headerName: "User",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="userListUser">
                        <img className="userListImg" src="https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif" alt="" />
                        {params.row.username}
                    </div>
                );
            },
        },
        { field: "email", headerName: "Email", width: 200 },
        { 
            field: "isAdmin", 
            headerName: "Admin", 
            width: 150,
            valueGetter: (params) => params.row.isAdmin ? 'Yes' : 'No'
        },
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/users/" + params.row._id}>
                            <button className="userListEdit">Edit</button>
                        </Link>
                        <DeleteOutline
                            className="userListDelete"
                            onClick={() => handleDelete(params.row.id)}
                        />
                    </>
                );
            },
        }
    ];

    return (
         <div className="userList">
            {/* TODO: Data grid */}
            <DataGrid
                rows={users}
                disableSelectionOnClick
                columns={columns}
                getRowId={(row) => row._id}
                pageSize={8}
                rowsPerPageOptions={[8, 10, 25, 50, 100]}
                checkboxSelection
                pagination
            />
         </div>
    )
}

export default UsersPage