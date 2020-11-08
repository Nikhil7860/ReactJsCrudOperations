import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const ViewUser = () => {


    const [user, setUser] = useState({
        name: "",
        usename: " ",
        email: " ",
        phone: " ",
        website: " ",
    });

    const { id } = useParams();

    useEffect(() => {
        loadUser();

    }, [])

    const loadUser = async () => {
        const res = await axios.get(`http://localhost:3001/users/${id}`);
        setUser(res.data);
    }

    return (
        <div className="container py-4">
            <Link className="btn btn-primary" to="/">
                back To Home
            </Link>
            <h1 className="display-4"> User Id: {id}</h1>
            <hr />
            <ul>
                <li className="list-group-item">name : {user.name}</li>
                <li className="list-group-item">name : {user.username}</li>
                <li className="list-group-item">name : {user.email}</li>
                <li className="list-group-item">name : {user.phone}</li>
                <li className="list-group-item">name : {user.website}</li>
            </ul>
        </div>
    );
}



export default ViewUser;