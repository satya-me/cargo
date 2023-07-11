import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteAdmin } from '../../../../services/slices/ADMIN/UserSlice';

const UserList = ({ item }) => {
    const dispatch = useDispatch();
    const token = JSON.parse(window.localStorage.getItem("token"));

    return (
        <>
            <td>{item?.full_name}</td>
            <td>{item?.email}</td>
            <td>+91{item?.phone}</td>
            <td>{item?.role}</td>
            <td>
                {
                    item?.status === "Active" ?
                        <span className="badge bg-success">{item?.status}</span>
                        :
                        <span className="badge bg-danger">{item?.status}</span>
                }
            </td>
            <td>
                {
                    token?.length > 0 ?
                        <Link to={`/edit-users/${item?._id}`} className="btn btn-sm btn-primary me-1"><i
                            className="fa fa-pencil-alt"></i></Link>
                        : <Link to="/admin/login" className="btn btn-sm btn-primary me-1"><i
                            className="fa fa-pencil-alt"></i></Link>
                }
                {
                    token?.length > 0 ?
                        <Link to="#" onClick={() => dispatch(deleteAdmin(item?._id))} className="btn btn-sm btn-danger"><i
                            className="fa fa-trash-alt"></i></Link>
                        : <Link to="/admin/login" className="btn btn-sm btn-danger"><i
                            className="fa fa-trash-alt"></i></Link>
                }
            </td>
        </>
    )
}

export default UserList;